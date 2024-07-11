import React from "react";
export default function StartPage({handleClick}){
    return(
        <div className="start-page-container">
            <div>
                <h1>Start Quiz</h1>
                <p>Make it happen</p>
                <button onClick={handleClick}>Start</button>
            </div>
        </div>
    )
}