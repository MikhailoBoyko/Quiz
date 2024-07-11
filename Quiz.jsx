import React from "react";
import QuestionList from "./QuestionList";

export default function Quiz({handleStart}){
    const[start,setStart]=React.useState(false);
    const[score,setScore]=React.useState(0);
    function handleScore(res){
        if(res){
            setScore(prev=>prev+1)
        }
    }
    return(
        <main className="container">
            <QuestionList start={start} score={score} handleScore={handleScore} handleStart={handleStart} />
            <div className="check-button">
            <button onClick={()=>setStart(true)}>Check</button>
            </div>
        </main>
    )
}