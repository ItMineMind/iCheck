import { firestore } from "./firebaseConfig";
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";

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
    console.log("Deleting document with ID: ", id);
    try {
        const docRef = doc(firestore, "items", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          await deleteDoc(docRef);
          console.log(`Document with ID ${id} has been deleted`);
        } else {
          console.log(`No document found with ID ${id}`);
        }
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    
}

const getItems = async() => {
    const itemDocs = await getDocs(collection(firestore, "items"));
    const itemsData = itemDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));

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

