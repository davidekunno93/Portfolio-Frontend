import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {
    // const [isNarrow, setIsNarrow] = useState(false);
    const navRef = useRef();

    // const getMiniApps = async () => {
    //     const resp = await axios.get("http://localhost:5000/api/mini-apps")
    //     return resp.data
    //   }
      
    //   const loadMiniApps = async () => {
    //     let data = await getMiniApps()
    //     setApp(data.data)
    //     console.log(data.data)
    //   }
      
    //   const [app, setApp] = useState(null)

    //   useEffect(() => {
    //     loadMiniApps()
    //   }, [])

    const getData = async () => {
        const resp = await axios.get('https://portfolio-backend-render-dh74.onrender.com/api/project-previews')
        return resp.data
    }
    
    const loadData = async () => {
        let data = await getData()
        console.log(data.data)
        setWebpages(data.data)
        setFithub(data.fithub)
        setPokemon(data.pokemon)
        setRealPeace(data.realpeace)
    }
    
    const [webpages, setWebpages] = useState(() => loadData());
    const [fithub, setFithub] = useState(null);
    const [pokemon, setPokemon] = useState(null);
    const [realPeace, setRealPeace] = useState(null);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth < 760) {
    //             setIsNarrow(true);
    //             console.log("narrow window")
    //         } else if (window.innerWidth >= 760) {
    //             setIsNarrow(false);
    //             console.log("wide window")
    //         }
    //     };
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, [isNarrow]);


    const showNavBar = () => {
        let element = document.getElementById("responsive-nav")
        element.classList.toggle("respond");
        let webpages = document.getElementById("webpages")
        let mini_apps = document.getElementById("mini-apps")
        let terminal_games = document.getElementById("terminal-games")
        webpages.classList.toggle("nav-ops")
        mini_apps.classList.toggle("nav-ops")
        terminal_games.classList.toggle("nav-ops")
    }

    const closeNavBar = () => {
        let element = document.getElementById("responsive-nav")
        element.classList.toggle("respond");
        let webpages = document.getElementById("webpages")
        let mini_apps = document.getElementById("mini-apps")
        let terminal_games = document.getElementById("terminal-games")
        webpages.classList.add("nav-ops")
        mini_apps.classList.add("nav-ops")
        terminal_games.classList.add("nav-ops")
    }
    

    return (
        <>
            
            <div className="navbar flx-r just-se">
                    <div className="white-full d-none"></div>
                <div className="mylab-logo mt-3 mx-2">
                    <Link to="/dashboard"><img src="https://i.imgur.com/BM7NPD4.png" className="nav-img" /></Link>
                </div>
                <div className="hamburger narrow-nav flx-1">
                    <img onClick={() => showNavBar()} className="hamburger-icon mt-4 mx-2 right" src="https://i.imgur.com/S5G7mam.png" />
                </div>
                <div id="responsive-nav" className="links nav flx-r mt-4h">
                    <div className="nav-op mx-2 flx-r">
                        <Link onClick={() => closeNavBar()} to="/dashboard" className="m0 black-link"><p className="m0 inline v-align">Home</p>
                        <span id="fade" className="material-symbols-outlined v-align">
                            home
                        </span></Link>
                    </div>
                    <div id="webpages" className="nav-op mx-2 flx-r">
                        <img onClick={() => closeNavBar()} className="close-responsive-nav" src="https://i.imgur.com/xoq0OUz.png" />
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/web-pages" className="black-link">Web Pages</Link>
                            <ul id="wp-dropdown" className="submenu">
                                <li><Link to="/showpage" state={{ project: fithub }} className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/36xKw57.png" />FitHub App</Link></li>
                                <li><Link to="/showpage" state={{ project: pokemon }} className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/7aP2Ove.png" />Pokemon Battle X</Link></li>
                                <li className="override"><Link to="/showpage" state={{ project: realPeace }} className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/gExodxr.png" />Real Peace Meditation</Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>
                    <div id="mini-apps" className="nav-op mx-2 flx-r">
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/mini-apps" className="m0 black-link">Mini Apps</Link>
                            <ul id="ma-dropdown" className="submenu">
                                <li><Link to="/showpage2" className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/zHV6kqG.png" />TimeZone App</Link></li>
                                <li><Link to="/showpage3" className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/oMhkUW3.png" />Pick A Pokemon</Link></li>
                                <li className="mb-2"><Link to="/showpage4" className="black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/ZFr4XWX.png" />Geo-Weather App</Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>
                    <div id="terminal-games" className="nav-op mx-2 flx-r">
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/terminal-games" className="m0 black-link">Terminal Games</Link>
                            <ul id="ma-dropdown" className="submenu">
                                <li><Link to="https://replit.com/@DavidEkunno/Equation-Solver-Ax-a-Bx-b" target="_blank" className="black-text ml-4">Equation Solver</Link></li>
                                <li><Link to="https://replit.com/@DavidEkunno/BlackJack" target="_blank" className="black-text ml-4">BlackJack</Link></li>
                                <li><Link to="https://replit.com/@DavidEkunno/Rock-Paper-Scissors" target="_blank" className="black-text ml-4">Rock, Paper, Scissors</Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>
                </div>
                <div className="nav-empty wide-nav"></div>
            </div>

        </>
    )
}
export default Navbar;