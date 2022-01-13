import React, {useState, useEffect} from "react";
import { onSnapshot } from 'firebase/firestore';
import "core-js/es/array";
import { colRef } from "../firebaseConfig";
import GridRender from "../components/gridRender";
import PowerstatsCount from "../components/powerstatsCount";
import { NavBar } from "../components/navBar";

const Home  = () => {
    localStorage.setItem("addHeroAction", false);
    const [team, setTeam] = useState([]);
    useEffect(() => { 
        let isMounted = true; 
                onSnapshot(colRef, (snapshot) => { 
                if (isMounted) {
                const team = snapshot.docs.map((doc) => {return {...doc.data(), id: doc.id}});
                setTeam(team) 
                localStorage.setItem("teamSize", team.length);
                }
            });   
        
        return () => { isMounted = false };
    }, []);
 
const TeamRender = () => {
    if(team.length !== 0){
        return (
            <div>
                <PowerstatsCount heros={team}/>
                <GridRender matchedHeros = {team}/>
            </div>
        )
    } else {
        return (
            <div className="home__no-heros">
                <h3 className="lead">You haven't gotten heros yet, go get some!</h3>
            </div>
        )
    }
}    
    return(
        <div className="home__background">
            <div className="home">
            <NavBar /> 
                <div className="home__padding">  
                    <h1 className="title home__title"><span> Your team</span></h1>
                    <hr className="home__hr"></hr>
                    <TeamRender />   
                </div>
            </div>
        </div>
    )
}



export default Home; 