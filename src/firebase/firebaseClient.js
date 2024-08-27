import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, addDoc, getDocs, query, where } from "firebase/firestore";

// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDV5hjGweuqi7OsOD9chLOxe8VDPvWz8D8",
    authDomain: "la-preuve-591de.firebaseapp.com",
    projectId: "la-preuve-591de",
    storageBucket: "la-preuve-591de.appspot.com",
    messagingSenderId: "200920183004",
    appId: "1:200920183004:web:773be50d46588c96878419"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener data por ID
const getItemsById = async (id) => {
    const docRef = doc(collection(db, "items"), id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

// Obtener id para la orden de compra
const addOrder = async (order) => {
    const docSnap = await addDoc(collection(db, "orders"), order);
    return docSnap.id;
};

// Obtener valores unicos para category, size y color
const getUniqueValues = async (field) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const values = querySnapshot.docs.map(doc => doc.data()[field]);
    return [...new Set(values)];
};

// Obtener ítems con filtros
const getFilteredItems = async (filters) => {
    let q = collection(db, "items");
    if (filters.category) {
        q = query(q, where("category", "==", filters.category));
    }
    if (filters.size) {
        q = query(q, where("size", "==", Number(filters.size)));
    }
    if (filters.color) {
        q = query(q, where("color", "==", filters.color));
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((item) => ({ ...item.data(), id: item.id }));
};

export {
    db,
    getItemsById,
    addOrder,
    getUniqueValues,
    getFilteredItems
};