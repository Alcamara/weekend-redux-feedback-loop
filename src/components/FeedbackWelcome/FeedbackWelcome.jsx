import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';

export default function FeedbackWelcome(){

    const history = useHistory()


    return (
        <div>
            <h2>Welcome To Feedback</h2>
            <h4>Where your opinions matter</h4>
            <p>Click below to start survey</p>
            <Button
                variant="contained"
                onClick={()=>{
                    history.push('/question1')
                }}
            >
                Start Survey
            </Button>
        </div>
    )
}