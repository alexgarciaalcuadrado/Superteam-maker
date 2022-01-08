import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { onSnapshot, collection } from 'firebase/firestore';
import "core-js/es/array";
import { colRef } from "../firebaseConfig";
import GridRender from "../components/gridRender";

const Home  = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        onSnapshot(colRef, (snapshot) => { 
            const data = snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}});
            setTeam({ team : data}) 
        });
    }, []);
    
    
    return(
        <div>
                <nav>
                    <Link to="/seeker">Seek new heros!</Link>
                </nav>  
                <h1>Your team</h1>
                {team.length != 0 && <GridRender matchedHeros = {team.team}/>}  
                
                    
            </div>
    )
}



export default Home; 