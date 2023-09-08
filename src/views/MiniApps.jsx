import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const MiniApps = (props) => {
    const navigate = useNavigate()


    

   

    return (
        <>
        <div className="empty-5"></div>
            <h1 className="center-text">My Mini Apps</h1>
            <div className="section-90 flx-r flx-wrap just-se">
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/zHV6kqG.png" />
                    </div>
                    <p className="m0 square-title large center-text my-1"><strong>TimeZone App</strong></p>
                    <p className="m0 square-desc medium center-text">Use this app to search the time of any city in the world!</p>
                    <Link to="/showPage2"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/oMhkUW3.png" />
                    </div>
                    <p className="m0 square-title large center-text my-1"><strong>Pick A Pokemon</strong></p>
                    <p className="m0 square-desc medium center-text">Search any pokemon and it shall appear, returning a picture and some stats.</p>
                    <Link to="/showpage3"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/GSFFAdd.png" />
                    </div>
                    <p className="m0 square-title large center-text my-1"><strong>Geo-Weather App</strong></p>
                    <p className="m0 square-desc medium center-text">Search any city to find out what the weather is like there right now.</p>
                    <Link to="/showpage4"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
            </div>
        </>
    )
}
export default MiniApps;
