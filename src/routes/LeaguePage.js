import React, { useState, useEffect } from "react";
import "./LeaguePage.css";
import axios from "axios";
import Team from "../components/Team";

const LeaguePage = ({ history, match }) => {

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeams();
        console.log(teams);
    }, [])

    const getTeams = async () => {
        const leagueStr = match.params.name.replaceAll(" ","%20");
        let res = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueStr}`);
        setTeams(res.data.teams);
        setLoading(false);
    }

    return (
        <div className='wrapper'>
            <div className='header'>
                <h1 className='text-center'>{match.params.name}</h1>
            </div>

            {loading ? <div className="loader">
                <span className="loader_text">Loading teams...</span>
            </div> : (<div className="teams">
                {teams.map(team => {
                    return <Team key={team.idTeam} t={team}/>
                })}
            </div>)}
        </div>
    );
}

export default LeaguePage;