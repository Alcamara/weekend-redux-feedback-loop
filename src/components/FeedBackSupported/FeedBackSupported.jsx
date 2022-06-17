import { useState } from "react"


export default function FeedBackSupported(){
    const [supportRating,setSupportRating] = useState(0)


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
            <button>NEXT</button>
        </div>
    )
}