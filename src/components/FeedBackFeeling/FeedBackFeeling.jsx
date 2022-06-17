import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function FeedBackFeeling(){
    const history = useHistory()
    const [feelingRating,setFeelingRating] = useState(0)

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input
             
            type="number" 
            min='0' 
            max='5' />
            <button
                onClick={()=>{
                    history.push('/question2')
                }}
            >
                NEXT
            </button>
        </div>
    )
}