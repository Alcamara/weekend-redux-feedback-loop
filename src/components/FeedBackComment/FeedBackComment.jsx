import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FeedBackComment(){

    const history = useHistory();
    const dispatch = useDispatch();
    const [txt,setTxt] = useState('');

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
                    dispatch({
                        type: 'ADD_COMMENT_FEEDBACK',
                        payload: txt
                    })
                    history.push('/review')
                }}
            >
                NEXT
            </button>
        </div>
    )
}