import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import swal from "sweetalert";
// Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

export default function FeedBackUnderstanding(){
    const dispatch = useDispatch()
    const history = useHistory()

    const [understandingRating, setUnderstandingRating] = useState(0)

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <TextField
             margin="normal"
             min='0'
             max='5'
             onChange={(evt)=>{
                setUnderstandingRating(evt.target.value)
            }} 
            type="NUMBER" />
            <div>
                <ButtonGroup>
                    {/* previous button */}
                    <Button
                        variant="contained"
                        onClick={()=>{
                            history.push('/question1')
                        }}
                        >
                        PREVIOUS 
                    </Button>
                    {/* next button */}
                    <Button
                        variant="contained"
                        onClick={()=>{
                        if(Number(understandingRating)!== 0){
                                dispatch({
                                    type: 'ADD_UNDERSTANDING_FEEDBACK',
                                    payload: Number(understandingRating)
                                })
                                history.push('/question3')
                        } else{
                            swal('Please enter a rating 1 - 5')
                        }
                        }}
                    >
                        NEXT
                        </Button>
                </ButtonGroup>
                </div>
        </div>
    )
}