import React, { useState, useEffect } from "react";
import axios from "axios";
import League from "../components/League";
import "./HomePage.css";

const HomePage = () => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getLeagues();
    }, [])

    const getLeagues = async () => {
        const res = await axios.get("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php");
        setLeagues(res.data.leagues);
        setLoading(false);
    };

    return (
        <section className="container">
            <div  className="title"><h1>Leagues of the world</h1></div>
            {loading ? <div className="loader">
                <span className="loader_text">Loading leagues...</span>
            </div> : (<div className="leagues">
                {leagues.map(league => {
                    return <League key={league.idLeague} l={league}/> 
            })}
            </div>)}
        </section>
    );
}


export default HomePage;