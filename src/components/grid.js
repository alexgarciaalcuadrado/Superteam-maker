import React from "react";
import {addToTeam, deleteFromTeam} from "../functions.js/actions"

export default (hero, id) => {
    const setAddHeroAction = (status) => {
        if(status=== "true"){
            return addToTeam(hero);
        } else if (status === "false"){
            return deleteFromTeam(hero);
        }
    } 
    return(
        <div key={id} className="grid">
            <div className="grid__box grid__content">
                <img className="hero-image" src={hero.image.url} alt="hero image"/>
            </div>
            <div className="grid__box">
            <h3 className="grid__content">{hero.name}</h3>
            </div>
            <div className="grid__box">
            <h3 className="grid__content">{hero.powerstats.intelligence}%</h3>
            </div>
            <div className="grid__box">
            <h3 className="grid__content">{hero.powerstats.strength}%</h3>
            </div>
            <div className="grid__box ">
            <h3 className="grid__content">{hero.powerstats.speed}%</h3>
            </div>
            <div className="grid__box ">
            <h3 className="grid__content">{hero.powerstats.durability}%</h3>
            </div>
            <div className="grid__box">
            <h3 className="grid__content">{hero.powerstats.power}%</h3>
            </div>
            <div className="grid__box">
            <h3 className="grid__content">{hero.powerstats.combat}%</h3>   
            </div>
            <div className="grid__box">
                { setAddHeroAction(localStorage.getItem("addHeroAction"))}
            </div>
        </div>
    )
}
