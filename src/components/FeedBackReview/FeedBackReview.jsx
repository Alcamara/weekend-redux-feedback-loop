import axios from "axios";
//import {useSelector} 

export default function FeedBackReview(){
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <div>
                <h3>Feeling: <span>$1</span></h3>
                <h3>Understanding: <span>$2</span></h3>
                <h3>Support: <span>$!</span></h3>
                <h3>Comment: <span>$!</span></h3>
            </div>
            <button>SUBMIT</button>
        </div>
    )
}