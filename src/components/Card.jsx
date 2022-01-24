import React from "react";


const Card =({id, name, email})=>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="pfp" src={`https://robohash.org/${id}?200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card