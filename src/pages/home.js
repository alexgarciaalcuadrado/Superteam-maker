import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getHeros } from "../firebaseConfig";
import GridRender from "../components/gridRender";


const Home  = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
      getHeros.then((res) => {
        res.splice(0, 1)
        setTeam({ team : res})
        })  
    }, [])
    
    return(
        <div>
                <nav>
                    <Link to="/seeker">Seek new heros!</Link>
                </nav>  
                <h1>Your team</h1>
                {team.length != 0 && <GridRender matchedHeros = {team.team}/>} 
                
                    
            </div>
    )
}



export default Home; 