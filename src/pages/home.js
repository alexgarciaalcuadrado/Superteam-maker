import React from "react";
import { Link } from "react-router-dom";
import grid from "../components/grid";

class Home extends React.Component{
    state = {
        heros: []
    }
    constructor(){
        super()
        
    }

    
    render(){
        return (
            <div>
                <nav>
                    <Link to="/seeker">Seek new heros!</Link>
                </nav>
                <h1>Your team</h1>
                {this.state.heros.length ?  
                        (
                        <div className="grid__background">
                            <div className="grid">
                                <div className="grid__box grid__top grid__top--container"></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Name</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Intelligence</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Strenght</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Speed</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Durability</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Power</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Combat</h2></div>
                                <div className="grid__box grid__top grid__top--container"></div>
                            </div>
                        </div>
                        )
                        :
                        <div></div>
                    }
                    {this.state.heros.map(hero => grid(hero, hero.id))}
            </div>
            )
    }
}


export default Home; 