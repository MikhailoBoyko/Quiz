import React from "react";
import Confetti from 'react-confetti'
export default function Result({handleStart, questions, score}){
    return(
        <div className="result-container">
            <div>
                {score==5 && <Confetti />}
                <h1>Your result : <span className="result-score">{score} / {questions.length}</span></h1>
                <button onClick={handleStart}>Play Again</button>
            </div>
        </div>
    )
}