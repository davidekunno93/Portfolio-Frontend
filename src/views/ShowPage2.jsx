import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CarouselImg } from "../CarouselImg";

const ShowPage2 = (props) => {
    const [carouselPosition, setCarouselPosition] = useState(0)
    const img_urls = [
        "https://i.imgur.com/8kqEhsV.png",
        "https://i.imgur.com/di3FXvN.png",
        "https://i.imgur.com/dl9Wtg0.png",
        "https://i.imgur.com/OheG8AI.png",
        "https://i.imgur.com/GrssIMh.png",
        "https://i.imgur.com/YAm2ivH.png"
    ]

    const slideCarousel = (newPosition) => {
        if (newPosition >= img_urls.length - 3) {
            newPosition = 0
        } else if (newPosition < 0) {
            newPosition = img_urls.length - 3
        }
        setCarouselPosition(newPosition)
    }

    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text xx-large">TimeZone App</h1>
            <div className="section-80 center my-2 flx-c">
                <img className="section1-img" src="https://i.imgur.com/iojAoTJ.png" />
                <div className="section-text dark-text">
                    I made this App to practice skills I had already learned like user authentication and API calls. My biggest goal was to make the app responsive and have a short turn around time for creating the app from start to finish. The objective was to make myself more efficient and keep myself sharp. Flask was used for the Backend, React was used for the Frontend.
                </div>
            </div>
            <div className="section-80 center my-2 flx-c">

                <div className="picture-row flx-r invisible768">
                    <div className="left-btn center-text">
                        <div className="v-helper"></div>
                        <img onClick={() => slideCarousel(carouselPosition - 1)} src="https://i.imgur.com/KapYyYQ.png" alt="" className="vb-arrow-left v-align inline-block" />
                    </div>
                    <div className="carousel flx-1">
                        <div className="inner" style={{ transform: `translateX(-${carouselPosition * 33.3}%)` }}>
                            {img_urls.map((img_url, i) => {
                                return <CarouselImg img_url={img_url} />
                            })}
                        </div>
                    </div>
                    <div className="right-btn center-text">
                        <div className="v-helper"></div>
                        <img onClick={() => slideCarousel(carouselPosition + 1)} src="https://i.imgur.com/N3aNd8b.png" alt="" className="vb-arrow-right v-align inline-block" />
                    </div>
                </div>


                <div className="img-section flx-r flx-wrap just-sb visible768">

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/8kqEhsV.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/8kqEhsV.png" /></Link>
                    </div>

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/GrssIMh.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/GrssIMh.png" /></Link>
                    </div>

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/OheG8AI.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/OheG8AI.png" /></Link>
                    </div>

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/dl9Wtg0.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/dl9Wtg0.png" /></Link>
                    </div>

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/di3FXvN.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/di3FXvN.png" /></Link>
                    </div>

                    <div className="s-img my-1">
                        <Link to="https://i.imgur.com/YAm2ivH.png" target="_blank"><img className="section2-img center" src="https://i.imgur.com/YAm2ivH.png" /></Link>
                    </div>

                </div>
                <div className="section-text">

                </div>
            </div>

            <div className="section-80 center my-2 flx-c dark-text">
                <div className="section-text">
                    <p className="m0"><strong>Technologies:</strong> HTML, CSS, Python, React JS, Flask, PostgreSQL</p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Github:</strong> <Link className="wrap-text" to="https://github.com/davidekunno93/Timezone_App_Frontend.git" target="_blank">https://github.com/davidekunno93/Timezone_App_Frontend.git</Link></p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Deployed site:</strong> <Link className="wrap-text" target="_blank">Coming soon...</Link></p>
                </div>
            </div>
            <div className="empty-2"></div>
        </>
    )
}
export default ShowPage2;