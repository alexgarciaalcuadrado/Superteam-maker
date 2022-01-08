import {addHero, deleteHero} from "../firebaseConfig"
import React, {useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';


const addToTeam = (hero) => {
    const [goHome, setGoHome] = useState(false)
    const onClick = () => {
        addHero(hero);
        localStorage.setItem("addHeroAction", "false");
        setGoHome({ goHome : true})
    }
    return(
        <div>
            <button onClick={onClick}>Add to my team</button>
            {goHome && <Navigate to="/home"/> }
        </div>
    )
};

const deleteFromTeam = (hero) => {
    const onClick = () =>{
        deleteHero(hero);
        
        return <Navigate to="/home"/>
    }
    return(
        <div>
            <button onClick={onClick}>Delete hero from team</button>
        </div>
    )
}

export {addToTeam, deleteFromTeam};