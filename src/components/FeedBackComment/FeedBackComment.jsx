import { useState } from "react"

export default function FeedBackComment(){

    const [txt,setTxt] = useState()

    return(
        <div>
            <h2>Any comments you want to leave</h2>
            <input 
            onChange={(evt)=>{
                setTxt(evt.target.value)
            }} 
            type="text" />
            <button>NEXT</button>
        </div>
    )
}