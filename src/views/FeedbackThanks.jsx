import { Link, useNavigate } from "react-router-dom"

const FeedbackThanks = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/dashboard')
    }

    return (
        <>
            <div className="empty-5"></div>
            <div className="empty-5"></div>
            <h1 className="center-text">Thank you for your Feedback!</h1>
            <button onClick={() => goBack()} className="square-btn-big center x-large my-3">Go Back</button>
            <div className="empty-5"></div>
        </>
    )
}
export default FeedbackThanks;