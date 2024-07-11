import React from "react";
import {nanoid} from "nanoid";
export default function Question({question,start,handleScore}){
    // const click=false;
    const [answers,setAnswers]=React.useState(shuffle());
    React.useEffect(()=>{
        handleScore(answers.some(item=>item.checked && item.correct))
     },[start])
    function handleClick(id){
        const newArr=answers.map(item=>(
            {...item, checked: false })
            )
        setAnswers(newArr);
        setAnswers(prev=>prev.map(item=>item.id===id ? {...item, checked: true} : item))
    }
    function shuffle(){
        const shuffledArray=[...question.incorrect_answers,question.correct_answer]
        .sort(()=>Math.random()-.5).map(answer=>(
                answer==question.correct_answer
                ? {answer, correct: true, checked: false, id: nanoid()}
                : {answer, correct: false, checked: false, id: nanoid()}
            ))
        return shuffledArray;
    }
    
    // console.log(answers.some(item=>item.checked==item.correct))
    return(
        <article style={{ backgroundColor: (start && answers.some(item=>item.checked && item.correct)) ? "green" : (start && !answers.some(item=>item.checked && item.correct)) ? "red" : "#191970"}}>
            <h3>{question.question}</h3>
            <div className="answers">
            {answers
            .map(item=>(
                <div onClick={()=>handleClick(item.id)} style={{ backgroundColor: item.checked ? "gray" : null}} key={item.id}>{item.answer}</div>
                                )
                        )
                        
            }
            </div>
        </article>
    )
}