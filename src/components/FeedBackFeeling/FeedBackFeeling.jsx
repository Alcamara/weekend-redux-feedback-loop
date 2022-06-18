import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FeedBackFeeling(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [feelingRating,setFeelingRating] = useState(0)

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input
             onChange={(evt)=> setFeelingRating(evt.target.value)}
            type="number" 
            min='0' 
            max='5' />
            <button
                onClick={()=>{
                    dispatch({
                        type: 'ADD_FEELING_FEEDBACK',
                        payload: feelingRating
                    })
                    history.push('/question2')
                }}
            >
                NEXT
            </button>
        </div>
    )
}