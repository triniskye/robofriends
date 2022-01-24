import React from "react";
import {robots} from "../data/robots.js";
import CardList from './CardList.jsx';
import SearchBox from "./SearchBox.jsx";

const App=()=>{
    return(
        <div className="tc">
            <h1>RoboFriends!</h1>
            <SearchBox/>
            <CardList robots = {robots}/>
        </div>
    )
}

export default App;