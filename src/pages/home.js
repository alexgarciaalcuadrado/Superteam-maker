import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { onSnapshot } from 'firebase/firestore';
import "core-js/es/array";
import { colRef } from "../firebaseConfig";
import GridRender from "../components/gridRender";
import PowerstatsCount from "../components/powerstatsCount";

const getData = new Promise((resolve, reject) => {
            
})

const Home  = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => { 
        let isMounted = true; 
                onSnapshot(colRef, (snapshot) => { 
                if (isMounted) {
                const data = snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}});
                setTeam({ team : data}) 
                localStorage.setItem("teamSize", data.length);
                }
            });   
        
        return () => { isMounted = false };
    }, []);
    
    
    return(
        <div>
                <nav>
                    <Link to="/seeker">Seek new heros!</Link>
                </nav>  
                <h1>Your team</h1>
                {team.length !== 0 && <PowerstatsCount heros={team.team}/>}
                {team.length !== 0 && <GridRender matchedHeros = {team.team}/>}  
                
                    
            </div>
    )
}



export default Home; 