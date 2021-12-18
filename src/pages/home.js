import React from "react";
import grid from "../components/grid";
import Seeker from "./seeker";



const Home  = (props) => {
    const heros = []
    console.log(props)
    return(
        <div>
            <button onClick={() => {<Seeker heros={heros}/>}}>Seek new heros!</button>
                 {/* <nav>
                    <Link to={seekerPage}>Seek new heros!</Link>
                </nav> */}
                <h1>Your team</h1>
                {heros.length ?  
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
                    {heros.map(hero => grid(hero, hero.id))}
            </div>
    )
}

/* class Home extends React.Component{
    state = {
        heros: value
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
} */


export default Home; 