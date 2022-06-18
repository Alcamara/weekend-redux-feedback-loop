import { Link } from "react-router-dom"

export default function FeedBackThankYou(){
    return (
        <div>
            <div className="row">
                <div className="col">*</div>
                <div  className="col">
                    <h3>Feedback!</h3>
                </div>
                <div><h2>Thank You!</h2></div>
                <Link to='/'>Leave New Feedback</Link>

            </div>
        </div>
    )
}