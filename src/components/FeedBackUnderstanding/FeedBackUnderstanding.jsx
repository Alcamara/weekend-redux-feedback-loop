import { useState } from "react"

export default function FeedBackUnderstanding(){

    const [understandingTxt, setUnderstandingTxt] = useState()

    return(
        <div>
            <h2>how well are your understanding the content?</h2>
            <input
             onChange={(evt)=>{
                setUnderstandingTxt(evt.target.value)
            }} 
            type="text" />
            <button>NEXT</button>
        </div>
    )
}