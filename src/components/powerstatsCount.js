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
        <div>
            <h2>Your team category is: {teamCategory()}</h2>
            <h2>Your total powerstats count:</h2>
            <h3>Combat: {combat} points</h3>
            <h3>Durability: {durability} points</h3>
            <h3>Intelligence: {intelligence} points</h3>
            <h3>Power: {power} points</h3>
            <h3>Speed: {speed} points</h3>
            <h3>Strength: {strength} points</h3>
        </div>
    )
}


export default PowerstatsCount;