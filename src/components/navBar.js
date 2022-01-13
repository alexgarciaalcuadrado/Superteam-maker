import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate()
    const onClick = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">SueperHeroMaker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/home">My team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/seeker">Seek new heros</Link>
                            </li>
                            <button className="btn btn-danger nav-log-out" onClick={onClick}>Log out</button>                            
                        </ul>
                    </div>
                </div>
            </nav>
            )

}

