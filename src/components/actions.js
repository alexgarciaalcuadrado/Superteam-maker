import React from "react";
import { useNavigate } from 'react-router-dom';

const addToTeam = (hero) => {
    const history = useNavigate();
    const onClick = (e) =>{
        e.preventDefault();
        let previousHeros = localStorage.getItem("heros");
        previousHeros.push(hero);
        localStorage.setItem("addHeroAction", false);
        history("/home");
    }
    return(
        <div>
            <button onClick={onClick}>Add hero to team</button>
        </div>
    )
};

const deleteFromTeam = (hero) => {
    console.log(false)
}

export {addToTeam, deleteFromTeam};