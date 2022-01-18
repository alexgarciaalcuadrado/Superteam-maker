import { initializeApp } from "firebase/app";
import "regenerator-runtime/runtime";
import { addDoc, deleteDoc, doc } from 'firebase/firestore';
import { getFirestore, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAFaQGBrdIb2mTNvhdh3YRGp58zvXAY_U8",
  authDomain: "superteam-maker.firebaseapp.com",
  databaseURL: "https://superteam-maker-default-rtdb.firebaseio.com/",
  projectId: "superteam-maker",
  storageBucket: "superteam-maker.appspot.com",
  messagingSenderId: "85720917402",
  appId: "1:85720917402:web:8beb034c6ab675cf1c8623"
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