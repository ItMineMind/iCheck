import { firestore } from "./firebaseConfig";
import { addDoc, collection, getDocs, doc, setDoc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

const addItem = async (title, isAllow, content, imgPath) => {
    const docRef = await addDoc(collection(firestore, "items"), {
        title: title,
        isAllow: isAllow,
        content: content,
        imgPath: imgPath,
        searchCount: 0
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

const searchCount = async (id) => {
    const collectionRef = collection(firestore, 'items');
    const docRef = doc(collectionRef, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const newCount = docSnap.data().searchCount + 1;
        await updateDoc(docRef, {
            searchCount: newCount
        });
    } else {
        console.log("No such document!");
        return null;
    }

}

const get5TopItem = async () => {
    const itemDocs = await getDocs(collection(firestore, "items"));
    const itemsData = itemDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const sortItem = itemsData.sort((a, b) => b.searchCount - a.searchCount);
    const top5Item = sortItem.slice(0, 5);
    return top5Item;
}

export const db = {
    addItem,
    deleteItem,
    getItems,
    getItem,
    searchCount,
};

