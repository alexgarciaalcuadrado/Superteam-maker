import {addHero, deleteHero} from "../firebaseConfig"
import React from "react";
import { Navigate, useNavigate  } from 'react-router-dom';


const addToTeam = (hero) => {
    const navigate = useNavigate()
    const onClick = () => {
        if(localStorage.getItem("teamSize") < 6){
            addHero(hero);
        }
        localStorage.setItem("addHeroAction", "false");
        navigate("/home")
    }
    return(
        <div>
            <button onClick={onClick}>Add to my team</button>
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