// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, Timestamp, addDoc, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1tLvvoXoxcJxU9l3kufM44EdvGgfWMvY",
    authDomain: "project-93597723341270099.firebaseapp.com",
    projectId: "project-93597723341270099",
    storageBucket: "project-93597723341270099.appspot.com",
    messagingSenderId: "557043478953",
    appId: "1:557043478953:web:2831d08f43f4d86e3e14b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export function testDB() {
    console.log(app);
}
export async function getAllProducts() {
    const productsCollectionRef = collection(dataBase, "products");
    const docSnapshot = await getDocs(productsCollectionRef)
    const dataProducts = docSnapshot.docs.map(item => {
        const producto = {
        ...item.data(),
        id: item.id
        }
        return producto
    })
    return dataProducts;
}

export async function getItemsCat(categoryid){
    const miColec = collection(dataBase, "products");
    const queryProduct= query(miColec, where("type", "==", categoryid));
    const docSnapshot= await getDocs(queryProduct);

    return docSnapshot.docs.map(item => {
        return{
            ...item.data(),
            id: item.id,
        }
    });

}





export async function getProduct(id) {
    const productsCollectionRef = collection(dataBase, "products");
const docRef = doc(productsCollectionRef, id)

const docSnapshot = await getDoc(docRef);

return { ...docSnapshot.data(), id: docSnapshot.id};
}
export default dataBase;

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();

    const ocf = {
        ...orderData,  
        date: buyTimestamp
    };
    
    const miColec = collection (dataBase, "buyOrders");
    const orderDoc = await addDoc(miColec, ocf);
    console.log (orderDoc.id);
    
    return orderDoc.id;
    
}

