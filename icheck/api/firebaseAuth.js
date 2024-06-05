import { signInWithEmailAndPassword, signOut,createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";
const auth = firebaseAuth;
const login = async (email , password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Success")
    } catch (error) {
      alert(error.message);
    } 
};

const logout = async () => {
    try {
      await signOut(auth);
        alert("Logout Success")
    } catch (error) {
      alert(error.message);
    } 
}

const signUp = async (email , password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Success")
    } catch (error) {
      alert(error.message);
    }
}

export {login , logout , signUp};