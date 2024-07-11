import React from "react";
import Question from "./Question";
import Result from "./Result";
export default function QuestionList({start,score,handleScore,handleStart}){
   
   const [questions,setQuestions]=React.useState([]);
   React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple")
        .then(res=>res.json())
        .then(data=>setQuestions(data.results))
   },[])
   
    return(
        <>
            {questions.map((question,index)=> <Question  start={start} handleScore={handleScore} key={index} question={question} />)}
            {start && <Result questions={questions} score={score} handleStart={handleStart} />}
        </>
    )
}