import axios from "axios";
import {useSelector} from 'react-redux' ;
import { useHistory } from "react-router-dom";

//Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function FeedBackReview(){

    const feedback = useSelector(store => store.feedbackReducer)
    const history = useHistory()

    function submitFeedback(){
        axios({
            url: '/feedback',
            method:'POST',
            data:{
                feeling: feedback.feeling,
                understanding: feedback.understanding,
                support: feedback.support,
                comments: feedback.comment
            }
        }).then(()=>{
            history.push('/thankyou')
        }).catch((err)=>{
            console.log('Post request failed',err);
        })
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>
                <h3>Feeling: <span>{feedback.feeling}</span></h3>
                <h3>Understanding: <span>{feedback.understanding}</span></h3>
                <h3>Support: <span>{feedback.support}</span></h3>
                <h3>Comment: <span>{feedback.comment}</span></h3>
            </div>
            <div>
                <ButtonGroup>
                    <Button
                    variant="contained"
                        onClick={()=>{
                            history.push('/question4')
                        }}
                        >
                        PREVIOUS 
                    </Button>
                    <Button
                    variant="contained"
                        onClick={()=>{
                            submitFeedback()
                        }}
                    >
                        SUBMIT
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}