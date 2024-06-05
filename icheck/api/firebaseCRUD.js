import { firestore } from "./firebaseConfig";
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

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
    await deleteDoc(doc(db, "items", id));
}

const getItems = async() => {
    const itemDocs = await getDocs(collection(firestore, "items"));
    const itemsData = courseDocs.docs.map((doc) => doc.data());

    return itemsData;
}

const getItem = async(id) => {
    const items = await getDocs

}


