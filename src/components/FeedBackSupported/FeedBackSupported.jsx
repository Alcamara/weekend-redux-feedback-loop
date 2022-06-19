import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
// Material UI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function FeedBackSupported(){
    const [supportRating,setSupportRating] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

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
            <div>
                <ButtonGroup>
                    <Button
                        variant="contained"
                        onClick={()=>{
                            history.push('/question2')
                        }}
                    >
                        PREVIOUS 
                    </Button>
                    <Button
                        variant="contained"
                        onClick={()=>{
                        if(Number(supportRating)!== 0){

                            dispatch({
                                type: 'ADD_SUPPORT_FEEDBACK',
                                payload: Number(supportRating)
                            })

                            history.push('/question4')

                        } else {
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