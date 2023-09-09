import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ShowPage3 = (props) => {
    

    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text xx-large">Pick-A-Pokemon</h1>
            <div className="section-80 center my-2 flx-c">
                <img className="section1-img" src="https://i.imgur.com/PHfsfFT.png" />
                <div className="section-text dark-text">
                This app was created during my bootcamp experience. The app was an assignment to practice using the DOM and getting comfortable with JavaScript in a fun, Poketastic type of way. Only one HTML file was used with CSS styling and a JS file for the interactive features of the page.
                </div>
            </div>
            <div className="section-80 center my-2 flx-c">
                <div className="img-section flx-r flx-wrap just-sb">
                    
                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/Ol06brQ.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/Ol06brQ.png" /></Link>
                    </div>
                    
                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/LxvmU78.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/LxvmU78.png" /></Link>
                    </div>
                    
                </div>
                <div className="section-text">
                
                </div>
            </div>

            <div className="section-80 center my-2 flx-c dark-text">
                <div className="section-text">
                    <p className="m0"><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Github:</strong> <Link className="wrap-text" to="https://github.com/davidekunno93/pokeapi_javascript.git" target="_blank">https://github.com/davidekunno93/pokeapi_javascript.git</Link></p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Deployed site:</strong> <Link className="wrap-text" to="https://pokeapi-javascript.vercel.app/" target="_blank">https://pokeapi-javascript.vercel.app/</Link></p>
                </div>
            </div>
        </>
    )
}
export default ShowPage3;