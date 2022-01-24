import React, {useState} from "react";
import {robots as Robots} from "../data/robots.js";
import CardList from './CardList.jsx';
import SearchBox from "./SearchBox.jsx";

const App=()=>{

    let [robots, setRobots] = useState(Robots);
    let [resultError, setResultError] = useState(false);
    function onSearchChange(e){
        let searchTerm = e.target.value
        const filteredRobots = robots.filter(r=>{
            return r.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        if (filteredRobots.length > 0 && searchTerm.length > 0){
            setRobots(filteredRobots);
            setResultError(false);
        }
        else if(filteredRobots.length < 1 && searchTerm.length > 0){
            setResultError(true);
            setRobots(Robots);
        }
        else{
            setRobots(Robots);
            setResultError(false);
        }
        

    }
    return(
        <div className="tc">
            <h1>RoboFriends!</h1>
            <SearchBox error = {resultError} change={onSearchChange}/>
            <CardList robots = {robots}/>
        </div>
    )
}

export default App;