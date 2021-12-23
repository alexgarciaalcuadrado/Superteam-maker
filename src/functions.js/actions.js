import React, {useState} from "react";
import { Navigate } from 'react-router-dom';

const addToTeam = (hero, prevHeros) => {
    const [goHome, setGoHome] = useState(false)
    const [newHeros, setNewHeros] = useState(prevHeros)
    const onClick = (e) => {
        e.preventDefault();
        const previousHeros = localStorage.getItem("heros");
        //const newHeros = [...previousHeros, ...hero];
        setNewHeros(prevState => {return {...prevState, ...hero}})
        localStorage.setItem("heros", newHeros);
        //newHeros.push(hero)
        //
        localStorage.setItem("addHeroAction", false);
        setGoHome({ goHome : true})
    }
    
    
    return(
        <div>
            <button onClick={onClick}>Add to my team</button>
            {goHome && <Navigate to="/home" state={{heros : newHeros}}/> }
        </div>
    )
};

const deleteFromTeam = (hero, prevHeros) => {
    const onClick = (e) =>{
        e.preventDefault();
        let previousHeros = prevHeros
        console.log(previousHeros)
    }
    return(
        <div>
            <button onClick={onClick}>Delete hero from team</button>
        </div>
    )
}

export {addToTeam, deleteFromTeam};