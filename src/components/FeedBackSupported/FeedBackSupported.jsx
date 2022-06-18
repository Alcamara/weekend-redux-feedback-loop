import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";

export default function FeedBackSupported(){
    const [supportRating,setSupportRating] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div>
            <h2>How well are you being supported?</h2>
            {supportRating}
            <input
            onChange={(evt)=>{
                setSupportRating(evt.target.value)
            }} 
            type="range" 
            min='0' 
            max='5'/>
            <button
                onClick={()=>{
                    dispatch({
                        type: 'ADD_SUPPORT_FEEDBACK',
                        payload: Number(supportRating)
                    })
                    history.push('/question4')
                }}
            >
                NEXT
            </button>
        </div>
    )
}