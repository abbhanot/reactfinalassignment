import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router"
import { setAnswer } from "../CarStore/Actions";


const Question1 = () =>{
    const dispatchRef = useDispatch()
    const answer1 = useSelector((state:any) => state.answer1);
    const[bgcolor1,setBgColor1] = useState("white")
    const[bgcolor2,setBgColor2] = useState("white")
    const[bgcolor3,setBgColor3] = useState("white")

    useEffect(()=>{
        if(answer1 === "Private off seat parking")
        {setBgColor1("#FF7BAC")
        setBgColor2("white")
        setBgColor3("white")}
        if(answer1 === "Shared parking")
        {setBgColor1("white")
        setBgColor2("#FF7BAC")
        setBgColor3("white")}
        if(answer1 === "On Street parking")
        {setBgColor1("white")
        setBgColor2("white")
        setBgColor3("#FF7BAC")}
    },[answer1])
    let history=useHistory()
    const backHandle = () => {
    history.push("/suitability")
    }
    const nextHandle = () => {
    history.push("/question2")
    }
    const select1 = (e:any) =>{
        setBgColor1("#FF7BAC")
        setBgColor2("white")
        setBgColor3("white")
        setAnswer(dispatchRef,e.target.innerText)
    }
    const select2 = (e:any) =>{
        setBgColor1("white")
        setBgColor2("#FF7BAC")
        setBgColor3("white")
        setAnswer(dispatchRef,e.target.innerText)
    }
    const select3 = (e:any) =>{
        setBgColor1("white")
        setBgColor2("white")
        setBgColor3("#FF7BAC")
        setAnswer(dispatchRef,e.target.innerText)
    }

    return(<>
    <div className="suitabilityTool">
    <div className="progressbar1"></div>
    <div className="questionDiv">
    <div className="questionBox">How do you park at home ?</div>
    <div className="optionBox" onClick={select1} style={{backgroundColor: bgcolor1}}>Private off seat parking</div>
    <div className="optionBox" onClick={select2} style={{backgroundColor: bgcolor2}}>Shared parking</div>
    <div className="optionBox" onClick={select3} style={{backgroundColor: bgcolor3}}>On Street parking </div>
    </div>
    <div className="buttons">
    <button onClick={backHandle} className="questionButtonNext">Back</button>
    <button onClick={nextHandle} className="questionButtonNext" disabled={answer1===""}>Next</button>
    </div>
    </div></>)
}

export default Question1