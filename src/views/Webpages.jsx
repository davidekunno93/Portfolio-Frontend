import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { DataContext } from "../Context/DataProvider";

const WebPages = () => {
    const { webProjects,  setWebProjects } = useContext(DataContext);

    const projects = [
        {
            img: "https://i.imgur.com/w6Akx1Z.png",
            title: "RealPeace Website",
            desc: "RealPeace is a website for social gatherings and organized group meditation meetups",
            page: ""
        },
        {
            img: "https://i.imgur.com/HcCt0Kp.png",
            title: "FitHub App",
            desc: "FitHub is a social workout app that allows users to build, share, use and review each other's workouts",
            page: ""
        },
        {
            img: "https://i.imgur.com/yjcRuU7.png",
            title: "Pokemon Battle X",
            desc: "This App allows users to catch up to 5 pokemon and battle them against other users",
            page: ""
        }
    ]

    return (
        <>
        <div className="empty-5"></div>
            <h1 className="center-text">My Projects</h1>
            <div className="section-90 flx-r flx-wrap just-se">
                {projects.map((p, i) => {
                    return <div className="square flx-c mx-4 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src={p.img} />
                    </div>
                    <p className="m0 square-title x-large center-text my-2 dark-text"><strong>{p.title}</strong></p>
                    <p className="m0 square-desc medium center-text black-text">{p.desc}</p>
                    <Link state={{ project: webProjects[i] }} to='/showpage'><button className="square-btn-big center x-large mt-3 flx-r">
                        <p className="m0-respond mb-1-respond m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2 white-text">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
            })}

                {/* <div className="square flx-c mx-4 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/zHV6kqG.png" />
                    </div>
                    <p className="m0 square-title x-large center-text my-2 dark-text"><strong>Title</strong></p>
                    <p className="m0 square-desc medium center-text black-text">Description</p>
                    <Link><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2 white-text">
                            arrow_forward
                        </span>
                    </button></Link>
                </div> */}


                
            </div>
        </>
    )
}
export default WebPages;
