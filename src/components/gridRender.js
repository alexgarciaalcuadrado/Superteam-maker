import React from "react";
import grid from "./grid";

const GridRender = (props) =>{
    if(props.lenght != 0){
        return( 
            <div className="grid__background">
            <div className="grid">
                <div className="grid__box grid__top grid__top--container"></div>
                <div className="grid__box grid__top grid__top--container"><h2>Name</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>Intelligence</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>strength</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>Speed</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>Durability</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>Power</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2>Combat</h2></div>
                <div className="grid__box grid__top grid__top--container"></div>
            </div>
            <>
            {props.matchedHeros.map(hero => grid(hero, hero.id))} 
            </>
            </div>)
    }
    
}

export default GridRender;