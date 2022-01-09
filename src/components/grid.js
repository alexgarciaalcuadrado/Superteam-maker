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
            <div className="grid__box grid__content">
                {hero.name}
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.intelligence}%
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.strength}%
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.speed}%
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.durability}%
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.power}%
            </div>
            <div className="grid__box grid__content">
                {hero.powerstats.combat}%
            </div>
            <div className="grid__box grid__content">
                { setAddHeroAction(localStorage.getItem("addHeroAction"))}
            </div>
        </div>
    )
}
