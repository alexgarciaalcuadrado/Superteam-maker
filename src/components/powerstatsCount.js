import React from "react";

const PowerstatsCount = ({heros}) => {
    const powerstats = heros.map((hero) => {return {...hero.powerstats}});
    
    const sumPoints = (powerstats, power) => {
        return powerstats.reduce((a, b) => a + (b[power] || 0), 0);
    }

    const combat = sumPoints(powerstats, "combat");
    const durability = sumPoints(powerstats, "durability");
    const intelligence = sumPoints(powerstats, "intelligence");
    const power = sumPoints(powerstats, "power");
    const speed = sumPoints(powerstats, "speed");
    const strength = sumPoints(powerstats, "strength");

    const powerSumArray = [combat, durability, intelligence, power, speed,strength];
    const powerNameArray = ["Combat", "Durability", "Intelligence", "Power", "Speed","Strength"]

    const teamCategory = () => {
        let category = "";
        let topNumber = 0;
        for(let i = 0; i < powerSumArray.length; i ++){
            if(powerSumArray[i] > topNumber){
                topNumber = powerSumArray[i];
                category = powerNameArray[i];
            }
        }

        return category;
    }

    
    return(
        <div className="powerstats-count">
            <div className="powerstats-count__right">
                <h2 className="powerstats-count__title powerstats-count__right--category">Your team category is:</h2>
                <h2 className="powerstats-count__title powerstats-count__right--category powerstats-count__right--category__span"> {teamCategory()}</h2>
            </div>
            <div  className="powerstats-count__left">
                <h2 className="powerstats-count__title">Your total powerstats count:</h2>
                <h3 className="powerstats-count__item"><span>-</span> Combat: {combat} points</h3>
                <h3 className="powerstats-count__item"><span>-</span> Durability: {durability} points</h3>
                <h3 className="powerstats-count__item"><span>-</span> Intelligence: {intelligence} points</h3>
                <h3 className="powerstats-count__item"><span>-</span> Power: {power} points</h3>
                <h3 className="powerstats-count__item"><span>-</span> Speed: {speed} points</h3>
                <h3 className="powerstats-count__item"><span>-</span> Strength: {strength} points</h3>
                
            </div>
            <div className="powerstats-count__center-line"></div>
            <div className="clearfix"></div>
        </div>
    )
}


export default PowerstatsCount;