import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

export default function FeedBackComment(){

    const history = useHistory();
    const dispatch = useDispatch();
    const [txt,setTxt] = useState('');

    return(
        <div>
            <h2>Any comments you want to leave</h2>
            <TextField
            margin="normal" 
            onChange={(evt)=>{
                setTxt(evt.target.value)
            }} 
            type="text" />
            <div>
                <ButtonGroup>
                    <Button
                        variant="contained"
                        onClick={()=>{
                            history.push('/question3')
                        }}
                    >
                        PREVIOUS 
                    </Button>
                    <Button
                        variant="contained"
                        onClick={()=>{
                        

                            dispatch({
                                type: 'ADD_COMMENT_FEEDBACK',
                                payload: txt
                            })
                            history.push('/review')
                    
                        }}
                        >
                        NEXT
                        </Button>
                    </ButtonGroup>
                </div>
        </div>
    )
}