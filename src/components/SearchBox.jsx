import React from "react";

const SearchBox=({change, error})=>{

    return(
        <div>
            <input className="pa3 ba b--green bg-lightest-blue mv3" 
            type="search" 
            onChange={change}
            placeholder="Search Robots"/>
            {error? <p style={{color:"red"}}>No results were found.</p> : <p></p>}
        </div>
    )
}  

export default SearchBox;