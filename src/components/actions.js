import React from "react";

const addToTeam = (hero) => {
    const onClick = (e) =>{
        e.preventDefault();
        // 1- create login page to generate localSotrage for each user
        // 2- when created token for said user, set "heros" array to 0 if it's the first time that user logs in
        // 3- then add heros to the "heros" array of that user with localstorage
        // 4- log out and log in again to see if the data was saved
    }
    return(
        <div>
            <button onClick={onClick}>Add hero to team</button>
        </div>
    )
};

const deleteFromTeam = (hero) => {
    console.log(false)
}

export {addToTeam, deleteFromTeam};