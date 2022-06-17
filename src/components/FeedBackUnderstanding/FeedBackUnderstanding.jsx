import { useState } from "react";
import { useHistory } from "react-router-dom"

export default function FeedBackUnderstanding(){

    const history = useHistory()

    const [understandingTxt, setUnderstandingTxt] = useState()

    return(
        <div>
            <h2>how well are your understanding the content?</h2>
            <input
             onChange={(evt)=>{
                setUnderstandingTxt(evt.target.value)
            }} 
            type="text" />
            <button
                onClick={()=>{
                    history.push('/question3')
                }}
            >
                NEXT
                </button>
        </div>
    )
}