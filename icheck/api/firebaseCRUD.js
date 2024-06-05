import { firestore } from "./firebaseConfig";
import { addDoc, collection, getDocs, doc, setDoc } from "firebase/firestore";

const addItem = async (title, isAllow, content, imgPath) => {
    const docRef = await addDoc(collection(firestore, "items"), {
        title,
        isAllow,
        content,
        imgPath,
      });

      console.log("Document written with ID: ", docRef.id);
}

const deleteItem = async (id) => {
    
}


