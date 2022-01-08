import { initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
//import { getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import { getFirestore, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAFaQGBrdIb2mTNvhdh3YRGp58zvXAY_U8",
  authDomain: "superteam-maker.firebaseapp.com",
  databaseURL: "https://superteam-maker-default-rtdb.firebaseio.com",
  projectId: "superteam-maker",
  storageBucket: "superteam-maker.appspot.com",
  messagingSenderId: "85720917402",
  appId: "1:85720917402:web:8beb034c6ab675cf1c8623"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "team")
 
/* const q = query(colRef, where("combat", "!=", "1"))*/


const addHero = (hero) => {
    addDoc(colRef, {
            name : hero.name,
            powerstats :{
                combat: hero.powerstats.combat,
                durability: hero.powerstats.durability, 
                intelligence: hero.powerstats.intelligence,
                power: hero.powerstats.power,
                speed: hero.powerstats.speed,
                strenght : hero.powerstats.strength
            },
            id: hero.id,
            image: {url : hero.image.url},
            
    } )
}

const deleteHero = (hero) => {
    //const q = query(colRef, hero.id);
    const docRef = doc(db, "team", hero.id);
    deleteDoc(docRef);
}


export {addHero, deleteHero, colRef}