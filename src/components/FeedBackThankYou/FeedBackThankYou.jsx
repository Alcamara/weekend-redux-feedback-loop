import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function FeedBackThankYou(){

    const history = useHistory() 
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row">
                <div className="col">*</div>
                <div  className="col">
                    <h3>Feedback!</h3>
                </div>
                <div>
                    <h2>Thank You!</h2>
                    <button
                        onClick={()=>{
                            dispatch({
                                type: 'CLEAR_FEEDBACK'
                            })

                            history.push('/')
                        }}
                    >
                        Leave New Feedback
                    </button>
                </div>

            </div>
        </div>
    )
}