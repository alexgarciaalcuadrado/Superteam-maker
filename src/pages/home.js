import React from "react";
import { Link } from "react-router-dom";

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
                <h1>The powerstats are: </h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            </div>
            )
    }
}


export default Home; 