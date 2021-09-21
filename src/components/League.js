import React from "react";
import "./League.css";
import {Link} from "react-router-dom";

const League = ({
    l
}) => {

    const {idLeague, strLeague, strSport} = l;
    return (
    <div className="league">
        <Link to={{
            pathname: `/league/${strLeague}`,
            state:{
                idLeague,
                strLeague
            }
        }}>
        <h2 className="league_name">{strLeague}</h2>
        <h3 className="sport">{strSport}</h3>
        </Link>
    </div>
);
} 

export default League;