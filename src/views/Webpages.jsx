import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const WebPages = () => {
    // useEffect(() => {
        //     console.log(webpages)
        // }, [webpages]);
        
        const getData = async () => {
            const resp = await axios.get('http://localhost:5000/api/project-previews')
            return resp.data
        }
        
        const loadData = async () => {
            let data = await getData()
            console.log(data.data)
            setWebpages(data.data)
        }
        
        const [webpages, setWebpages] = useState(() => loadData());

    return (
        <>
        <div className="empty-5"></div>
            <h1 className="center-text">My Web Pages</h1>
            <div className="section-90 flx-r flx-wrap just-se">

                {Array.isArray(webpages) ? webpages.map((p, i) => {
                    return <div key={i} className="square flx-c mx-4 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src={p.dp} />
                    </div>
                    <p className="m0 square-title x-large center-text my-2"><strong>{p.title}</strong></p>
                    <p className="m0 square-desc medium center-text">{p.desc}</p>
                    <Link to='/showpage' state={{ project: p }}><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
                }) : <p className="center-text x-large">Loading...</p> }

                {/* <div className="square flx-c mx-2 my-2">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/zHV6kqG.png" />
                    </div>
                    <p className="m0 square-title large center-text"><strong>Title</strong></p>
                    <p className="m0 square-desc medium center-text">Descirption goes here</p>
                    <Link><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2">
                            arrow_forward
                        </span>
                    </button></Link>
                </div> */}


                
            </div>
        </>
    )
}
export default WebPages;
