import React, { useState, useEffect } from "react";
import "./LeaguePage.css";
import axios from "axios";

const LeaguePage = ({ match }) => {
    const [team, setTeam] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTeam();
        console.log(team);
    }, []);


    const getTeam = async () => {
        const teamStr = match.params.name.replaceAll(" ","%20");
        let res = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamStr}`);
        console.log(res.data);
        setTeam(res.data.teams[0]);
    }

    return (
        <>
            <div className='container-fluid d-flex justify-content-center align-items-center' style={{ backgroundColor: '#1b1b1b'}}>
                <h1 className='text-white'>{match.params.name}</h1>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <div className='d-flex justify-content-center'>
                    <img className='p-3' src={team.strTeamBadge} alt={team.strTeam} width='70%'/>
                </div>
                <div className='p-5'>
                    <p className='text-center'>{team.strDescriptionEN}</p>
                    <div className='d-flex justify-content-around'>
                        {team.strCountry && <p>Location: {team.strCountry}</p>}
                        {team.strSport && <p>Sport: {team.strSport}</p>}
                        {team.intFormedYear && <p>Foundation: {team.intFormedYear}</p>}
                    </div>
                </div>
                    {team.strStadium ? <h4>Stadium: {team.strStadium}</h4> : null}
                    {
                        team.strStadiumThumb && 
                        <div className='d-flex justify-content-center flex-wrap'>
                            <img className='p-3' src={team.strStadiumThumb} alt={team.strStadium} width='70%'/>
                        </div>
                    }
                    {team.intStadiumCapacity > 0 && <p>Capacity: {team.intStadiumCapacity}</p>}
            </div>
        </>

    );
}


export default LeaguePage;