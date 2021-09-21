import React from "react";
import "./Team.css";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


const Team = ({
    t
 }) => {
    const history = useHistory();

    return (
        <div className='team d-flex justify-content-center'>
            <Link to={`/team/${t.strTeam}`}>
                <div className='col-md-3'>
                    <img style={{maxWidth: "150%"}} src={t.strTeamBadge} alt={t.strTeam} title={t.strTeam}></img>
                </div>
                <div className="col-md-9">
                    <h2 className="team_name">{t.strTeam.slice(0,19)}</h2>
                    <h4 className="team_location">{t.strStadiumLocation}</h4>
                </div>
            </Link>
        </div>
    );
}

export default Team;