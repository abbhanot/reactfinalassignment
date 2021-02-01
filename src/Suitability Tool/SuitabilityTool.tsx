
import { useHistory } from 'react-router-dom'

const SuitabilityTool =() =>{
    let history = useHistory()
    const startTestClick=()=>{
        history.push("/question1")
    }
    
    return(<>
    <div className="suitabilityTool">
        <div className="progressbar"></div>
        <div className="questionBoxStart">
            Welcome to Electric Car suitability Tool
        </div>
        <button onClick={startTestClick} className="questionButtonStart">StartTest</button>
    </div>
    </>)
}

export default SuitabilityTool