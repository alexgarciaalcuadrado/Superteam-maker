import React from "react";
import grid from "./grid";

const GridRender = (props) =>{
    if(props.lenght != 0){
        return( 
            <div className="grid__background">
            <div className="grid">
                <div className="grid__box grid__top grid__top--container hero-image"></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Name</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Intelligence</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">strength</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Speed</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Durability</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Power</h2></div>
                <div className="grid__box grid__top grid__top--container"><h2 className="grid__title-text">Combat</h2></div>
                <div className="grid__box grid__top grid__top--container"></div>
            </div>
            {props.matchedHeros.map(hero => grid(hero, hero.id))} 
            </div>
            )
    }
    
}

export default GridRender;