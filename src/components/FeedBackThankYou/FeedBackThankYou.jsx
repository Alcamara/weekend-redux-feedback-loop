import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './FeedBackThankYou.css'
//Material UI
import Button from '@mui/material/Button';
import StarsIcon from '@mui/icons-material/Stars';
import Grid from '@mui/material/Grid';

export default function FeedBackThankYou(){

    const history = useHistory() 
    const dispatch = useDispatch()
    return (
        <div>
            <div  className="row">
                <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </div>
                <div  className="col">
                    <h3>Feedback!</h3>
                </div>
            </div>    
                <div>
                    <h2>Thank You!</h2>
                    <div>
                        <Button
                            variant="contained"
                            onClick={()=>{
                                dispatch({
                                    type: 'CLEAR_FEEDBACK'
                                })

                                history.push('/')
                            }}
                        >
                            Leave New Feedback
                        </Button>
                    </div>
                </div>
        </div>
    )
}