import { useState } from "react";
import { useHistory } from "react-router-dom"

export default function FeedBackComment(){

    const history = useHistory()

    const [txt,setTxt] = useState('')

    return(
        <div>
            <h2>Any comments you want to leave</h2>
            <input 
            onChange={(evt)=>{
                setTxt(evt.target.value)
            }} 
            type="text" />
            <button
                onClick={()=>{
                    history.push('/review')
                }}
            >
                NEXT
            </button>
        </div>
    )
}