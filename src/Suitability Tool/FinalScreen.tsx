import { useHistory } from "react-router-dom"

const FinalScreen = () =>{
    let history=useHistory()
    const backHandle = () => {
        history.push("/question2")
        }
    return(<><div className="suitabilityTool">
        <div className="progressbar3"></div>
    <div className="questionBoxStart">
        All Done!
    </div>
    <button onClick={backHandle} className="questionButtonBack">Back</button>
</div></>)
}

export default FinalScreen