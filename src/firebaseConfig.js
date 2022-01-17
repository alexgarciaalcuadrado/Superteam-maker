import { initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { getFirestore, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "superteam-maker.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: "superteam-maker",
  storageBucket: "superteam-maker.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_PROJECT_ID 
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "team")


const addHero = (hero) => {
    addDoc(colRef, {
            name : hero.name,
            powerstats :{
                combat: parseInt(hero.powerstats.combat),
                durability: parseInt(hero.powerstats.durability), 
                intelligence: parseInt(hero.powerstats.intelligence),
                power: parseInt(hero.powerstats.power),
                speed: parseInt(hero.powerstats.speed),
                strength : parseInt(hero.powerstats.strength)
            },
            id: parseInt(hero.id),
            image: {url : hero.image.url},
            
    } )
}

const deleteHero = (hero) => {
    const docRef = doc(db, "team", hero.id);
    deleteDoc(docRef);
}


export {addHero, deleteHero, colRef}