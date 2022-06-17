import { useState } from "react"


export default function FeedBackFeeling(){

    const [feelingRating,setFeelingRating] = useState()

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <input
             
            type="number" 
            min='0' 
            max='5' />
            <button>NEXT</button>
        </div>
    )
}