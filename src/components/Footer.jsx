import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <>
        <div className="empty-2"></div>
            <div className="footer flx-r">
                <div className="flx-1 flx-c mx-2 align-r">
                    <p className="m0 right-text x-large times">Thank you for viewing my page</p>
                </div>
                <div className="flx-1 flx-c mx-6">
                    <p className="footer-title large m0 my-2"><strong>Follow Me</strong></p>
                    <Link to="https://www.linkedin.com/in/david-ekunno-794619a3/" target="_blank" className="white-link footer-option"><div className="footer-option m0 my-2"><img className="sm-icon v-align" src="https://i.imgur.com/1rvkPRG.png" /><p className="m0 inline v-align ml-2">LinkedIn</p></div></Link>
                    <Link to="https://www.instagram.com/davidekunno/?hl=en" target="_blank" className="white-link footer-option"><div className="footer-option m0 my-2"><img className="sm-icon v-align" src="https://i.imgur.com/TxySrWk.png" /><p className="m0 inline v-align ml-2">Instagram</p></div></Link>
                </div>
            </div>
        </>
    )
}