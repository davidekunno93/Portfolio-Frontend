import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ShowPage4 = (props) => {
    

    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text xx-large">Geo-Weather App</h1>
            <div className="section-80 center my-2 flx-c">
                <img className="section1-img" src="https://i.imgur.com/X6WuFtg.png" />
                <div className="section-text">
                This app allowed me to explore using API calls from multiple different APIs simultaneously, sorting through that returned information and displaying it on the page. I also continued to practice using the DOM and took the opportunity to exercise my creativity producing icons and images for this project.
                </div>
            </div>
            <div className="section-80 center my-2 flx-c">
                <div className="img-section flx-r flx-wrap just-sb">
                    
                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/HQav78j.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/HQav78j.png" /></Link>
                    </div>
                    
                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/K7lyfDa.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/K7lyfDa.png" /></Link>
                    </div>
                    
                </div>
                <div className="section-text">
                
                </div>
            </div>

            <div className="section-80 center my-2 flx-c">
                <div className="section-text">
                    <p className="m0"><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Github:</strong> <Link className="wrap-text" to="https://github.com/davidekunno93/Weather_App.git" target="_blank">https://github.com/davidekunno93/Weather_App.git</Link></p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Deployed site:</strong> <Link className="wrap-text" to="https://weather-app-nine-topaz.vercel.app/">https://weather-app-nine-topaz.vercel.app/</Link></p>
                </div>
            </div>
        </>
    )
}
export default ShowPage4;