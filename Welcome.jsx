import React from "react";
import StartPage from "./StartPage";
import Quiz from "./Quiz";
export default function Welcome(){
    const [launch,setLaunch]=React.useState(false);
    function handleClick(){
        setLaunch(true);
    }
    function handleStart(){
        setLaunch(false);
    }
    return(
        <main>
            {!launch && <StartPage handleClick={handleClick} />}
            {launch && <Quiz handleStart={handleStart} />}
        </main>
    )
}