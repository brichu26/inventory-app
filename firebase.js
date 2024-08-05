

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBjyYUB2ZOQwf5VrQa68gpotZ7vXNFqjPE",
    authDomain: "inventory-6a3cc.firebaseapp.com",
    projectId: "inventory-6a3cc",
    storageBucket: "inventory-6a3cc.appspot.com",
    messagingSenderId: "170335063983",
    appId: "1:170335063983:web:7e78687c647ebc570e695a",
}; 
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };