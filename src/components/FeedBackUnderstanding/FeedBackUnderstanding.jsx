import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";

export default function FeedBackUnderstanding(){
    const dispatch = useDispatch()
    const history = useHistory()

    const [understandingTxt, setUnderstandingTxt] = useState('')

    return(
        <div>
            <h2>how well are your understanding the content?</h2>
            <input
             onChange={(evt)=>{
                setUnderstandingTxt(evt.target.value)
            }} 
            type="NUMBER" />
            <button
                onClick={()=>{
                    dispatch({
                        type: 'ADD_UNDERSTANDING_FEEDBACK',
                        payload: understandingTxt
                    })
                    history.push('/question3')
                }}
            >
                NEXT
                </button>
        </div>
    )
}