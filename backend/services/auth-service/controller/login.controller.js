import {getAuth} from "firebase-admin/auth"
import {app} from "../config/firebase.js";
import User from "../model/user.model.js";
import crypto from "crypto";

export const loginController = async (req, res) => {
    try {
        const {token} = req.body;
        if (!token) {
            return res.status(401).json({message: 'token mismatch'});
        }
        const decoded = await getAuth(app);
        const user = await decoded.verifyIdToken(token);

        let verifiedUser = await User.findOne({firebaseUid: user.uid});

        if (!verifiedUser) {
            verifiedUser = await User.create({
                username: user.name,
                email: user.email,
                firebaseUid: user.uid,
                googleAvatar: user.picture,
            })
        }
        const sessionId = crypto.randomUUID();
        res.cookie("sessionId", sessionId, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 * 24 * 7,
        });
        return res.status(200).json({user: verifiedUser, success: true})

    } catch (err) {
        return res.status(400).json({error: "Login Failed", success: false});
    }
}