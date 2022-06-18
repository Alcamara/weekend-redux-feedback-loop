import axios from "axios";
//import {useSelector} 

import { useHistory } from "react-router-dom";

export default function FeedBackReview(){

    const history = useHistory()

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>
                <h3>Feeling: <span>$1</span></h3>
                <h3>Understanding: <span>$2</span></h3>
                <h3>Support: <span>$!</span></h3>
                <h3>Comment: <span>$!</span></h3>
            </div>
            <button
                onClick={()=>{
                    history.push('/thankyou')
                }}
            >
                SUBMIT
            </button>
        </div>
    )
}