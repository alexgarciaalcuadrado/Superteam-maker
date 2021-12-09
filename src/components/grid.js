import React from "react";
import {addToTeam, deleteFromTeam} from "./actions"

export default (hero, id) => {
    const addHeroAction = localStorage.getItem("addHeroAction")
    return(
        <div className="grid" key={id}>
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
                { addHeroAction ? addToTeam(hero) : deleteFromTeam(hero)}
            </div>
        </div>
    )
}
