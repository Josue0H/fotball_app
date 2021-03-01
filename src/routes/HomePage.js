import React from "react";
import axios from "axios";
import League from "../components/League";
import "./HomePage.css";

class HomePage extends React.Component{
    state = {
        isLoading: true,
        leagues: []
    };
    getLeagues = async () => {
        const {data: {leagues}} = await axios.get("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php");
        this.setState({leagues,isLoading: false});
    };

    componentDidMount(){
        this.getLeagues();
    }

    render(){
        const {isLoading, leagues} = this.state;
        console.log(leagues);
        return (
            <section className="container">
                <div  className="title"><h1>Leagues of the world</h1></div>
                {isLoading ? <div className="loader">
                    <span className="loader_text">Loading leagues...</span>
                </div> : (<div className="leagues">
                    {leagues.map(league => {
                        return <League key={league.idLeague} id={league.idLeague} name={league.strLeague} sport={league.strSport}/> 
                })}
                </div>)}
            </section>
        );
    }

}


export default HomePage;