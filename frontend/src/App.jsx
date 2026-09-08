import './App.css'
import {signInWithPopup} from "firebase/auth"
import {auth, googleProvider} from "./utils/firebase.js";
import api from "./utils/axios.js";

function App() {
    const handleLogin = async (token) => {
        try{
           const data = await api.post("/auth/login", {token});
           console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    const loginWithGoogle = async () => {
        const response = await signInWithPopup(auth, googleProvider);
        // console.log(response);
        await handleLogin(await response.user.getIdToken());
    }


    return (
        <div className="bg-fuchsia-300 w-full min-h-screen flex flex-col items-center justify-center">
            <button onClick={loginWithGoogle} className="bg-yellow-400 text-black text-2xl max-w-5xl w-2xs h-20">
                continue with Google
            </button>
        </div>
    )
}

export default App
