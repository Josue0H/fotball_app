import React from "react";
import "./League.css";

function League({id, name, sport}){
    return (
        <div className="league">
            <h2 className="league_name">{name}</h2>
            <h3 className="sport">{sport}</h3>
        </div>
    );
}

export default League;