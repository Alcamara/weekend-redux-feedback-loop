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
                   if(Number(supportRating)!== 0){

                    dispatch({
                        type: 'ADD_SUPPORT_FEEDBACK',
                        payload: Number(supportRating)
                    })

                    history.push('/question4')

                   } else {
                    swal('Please enter a rating 1 - 5')
                   }
                }}
            >
                NEXT
            </button>
        </div>
    )
}