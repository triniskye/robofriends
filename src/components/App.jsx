import React, {useState} from "react";
import {robots as Robots} from "../data/robots.js";
import CardList from './CardList.jsx';
import SearchBox from "./SearchBox.jsx";
import Scroll from "./Scroll.jsx";
import "../App.css";

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
            <h1 className="f1">RoboFriends</h1>
            <SearchBox error = {resultError} change={onSearchChange}/>
            <Scroll>
                <CardList robots = {robots}/>
            </Scroll>
        </div>
    )
}

export default App;