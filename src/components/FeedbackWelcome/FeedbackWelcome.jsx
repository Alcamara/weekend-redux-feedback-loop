import { useHistory } from "react-router-dom"

export default function FeedbackWelcome(){

    const history = useHistory()


    return (
        <div>
            <h2>Welcome To Feedback</h2>
            <h4>Where your opinions matter</h4>
            <p>Click below to start survey</p>
            <button
                onClick={()=>{
                    history.push('/question1')
                }}
            >
                Start Survey
            </button>
        </div>
    )
}