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
    const itemsData = itemDocs.docs.map((doc) => doc.data());

    return itemsData;
}

const getItem = async (id) => {
    const docRef = doc(firestore, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
        return null;
    }
}

export const db = {
    addItem,
    deleteItem,
    getItems,
    getItem
};

