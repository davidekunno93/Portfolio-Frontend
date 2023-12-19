import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import { DataContext } from "../Context/DataProvider";



const Navbar = () => {
    // const [isNarrow, setIsNarrow] = useState(false);
    const { webProjects, setWebProjects } = useContext(DataContext);

    const resetScroll = () => {
        window.scrollTo(0, 0);
        // console.log('eggs')
    }
    useEffect(() => {
        // window.addEventListener('click', resetScroll())
        const links = document.getElementsByClassName('link')
        for (let i=0; i<links.length; i++) {
            links[i].addEventListener('mouseup', resetScroll);
        }
        }, [])
    
    


    // const getData = async () => {
    //     const resp = await axios.get('https://portfolio-backend-render-dh74.onrender.com/api/project-previews')
    //     return resp.data
    // }

    // const loadData = async () => {
    //     let data = await getData()
    //     console.log(data.data)
    //     setWebpages(data.data)
    //     setFithub(data.fithub)
    //     setPokemon(data.pokemon)
    //     setRealPeace(data.realpeace)
    // }

    // const [webpages, setWebpages] = useState(() => loadData());
    // const [fithub, setFithub] = useState(null);
    // const [pokemon, setPokemon] = useState(null);
    // const [realPeace, setRealPeace] = useState(null);

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


    const toggleNavBar = () => {
        let element = document.getElementById("responsive-nav")
        let anim_hb = document.getElementById("anim-hb")
        let webpages = document.getElementById("webpages")
        let mini_apps = document.getElementById("mini-apps")
        let terminal_games = document.getElementById("terminal-games")
        if (element.classList.contains('respond')) {
            element.classList.remove("respond");
            anim_hb.classList.remove('openmenu')
            webpages.classList.remove("nav-ops")
            mini_apps.classList.remove("nav-ops")
            terminal_games.classList.remove("nav-ops")
        } else {
            element.classList.add("respond");
            anim_hb.classList.add('openmenu')
            webpages.classList.add("nav-ops")
            mini_apps.classList.add("nav-ops")
            terminal_games.classList.add("nav-ops")
        }
        // element.classList.toggle("respond");
        // anim_hb.classList.toggle('openmenu')
        // webpages.classList.toggle("nav-ops")
        // mini_apps.classList.toggle("nav-ops")
        // terminal_games.classList.toggle("nav-ops")
    }
    const showNavBar = () => {
        let element = document.getElementById("responsive-nav")
        element.classList.toggle("respond");
        let anim_hb = document.getElementById("anim-hb")
        anim_hb.classList.add('openmenu')
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
        let anim_hb = document.getElementById("anim-hb")
        anim_hb.classList.remove('openmenu')
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
                    <Link to="/dashboard" className="link"><img src="https://i.imgur.com/Z5l696h.png" className="nav-img" /></Link>
                </div>
                <div className="hamburger narrow-nav flx-1 pointer onHove ">
                    <div onClick={() => toggleNavBar()} id="anim-hb" className="anim-hb-icon mt-3h right mr-3">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    {/* <img onClick={() => showNavBar()} className="hamburger-icon mt-4 mx-2 right" src="https://i.imgur.com/S5G7mam.png" /> */}
                </div>
                <div id="responsive-nav" className="links nav flx-r mt-4h">
                    <div className="nav-op mx-2 flx-r">
                        <Link onClick={() => closeNavBar()} to="/dashboard" className="link m0 black-link"><p className="m0 inline font-ub mr-3-respond">Home</p>
                            {/* <span id="fade" className="material-symbols-outlined v-align mb-1">
                                home
                            </span> */}
                        </Link>
                    </div>
                    <div id="webpages" className="nav-op mx-2 flx-r">
                        {/* <img onClick={() => closeNavBar()} className="close-responsive-nav" src="https://i.imgur.com/xoq0OUz.png" /> */}
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/web-pages" className="black-link font-ub link">Projects</Link>
                            <ul id="wp-dropdown" className="submenu font-ub">
                                <li><Link to="/showpage" state={{ project: webProjects[0] }} className="black-text link"><img className="nb-icon mx-4" src="https://i.imgur.com/qyd4LXy.png" />Routewise</Link></li>
                                <li><Link to="/showpage" state={{ project: webProjects[1] }} className="black-text link"><img className="nb-icon mx-4" src="https://i.imgur.com/gExodxr.png" />Real Peace Meditation</Link></li>
                                <li><Link to="/showpage" state={{ project: webProjects[2] }} className="black-text link"><img className="nb-icon mx-4" src="https://i.imgur.com/36xKw57.png" />FitHub App</Link></li>
                                <li><Link to="/showpage" state={{ project: webProjects[3] }} className="black-text link"><img className="nb-icon mx-4" src="https://i.imgur.com/7aP2Ove.png" />Pokemon Battle X</Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined menu-drop-arrows">
                            expand_more
                        </span>
                    </div>
                    <div id="mini-apps" className="nav-op mx-2 flx-r">
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/mini-apps" className="m0 black-link font-ub link">Mini Apps</Link>
                            <ul id="ma-dropdown" className="submenu font-ub">
                                <li><Link to="/showpage2" className="link black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/zHV6kqG.png" />TimeZone App</Link></li>
                                <li><Link to="/showpage3" className="link black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/oMhkUW3.png" />Pick A Pokemon</Link></li>
                                <li className="mb-2"><Link to="/showpage4" className="link black-text"><img className="nb-icon mx-4" src="https://i.imgur.com/ZFr4XWX.png" />Geo-Weather App</Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined menu-drop-arrows">
                            expand_more
                        </span>
                    </div>
                    <div id="terminal-games" className="nav-op mx-2 flx-r">
                        <li className="m0"><Link onClick={() => closeNavBar()} to="/terminal-games" className="link m0 black-link font-ub">Terminal Games</Link>
                            <ul id="ma-dropdown" className="submenu font-ub">
                                <li><Link to="https://replit.com/@DavidEkunno/Equation-Solver-Ax-a-Bx-b" target="_blank" className="black-text">
                                    <p className="m0 ml-4 black-text font-ub inline">Equation Solver</p>
                                    <span className="material-symbols-outlined mr-4 v-bott right">
                                        open_in_new
                                    </span>
                                </Link></li>
                                <li><Link to="https://replit.com/@DavidEkunno/BlackJack" target="_blank" className="black-text">
                                    <p className="m0 ml-4 black-text font-ub inline">BlackJack</p>
                                    <span className="material-symbols-outlined mr-4 v-bott right">
                                        open_in_new
                                    </span>
                                </Link></li>
                                <li><Link to="https://replit.com/@DavidEkunno/Rock-Paper-Scissors" target="_blank" className="black-text">
                                    <p className="m0 ml-4 black-text font-ub inline">Rock, Paper, Scissors</p>
                                    <span className="material-symbols-outlined mr-4 v-bott right">
                                        open_in_new
                                    </span>
                                </Link></li>
                            </ul>
                        </li>
                        <span id="spin" className="material-symbols-outlined menu-drop-arrows">
                            expand_more
                        </span>
                    </div>
                    <div className="narrow-nav resume">
                        <Link to='https://magenta-nissie-77.tiiny.site' target="_blank">
                            <button className="square-btn-allow">
                                <p className="m0 inline v-align">View Resume</p>
                                <span className="material-symbols-outlined ml-2 v-align">
                                    open_in_new
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="wide-nav2 resume mt-3h">
                    <Link to='https://magenta-nissie-77.tiiny.site' target="_blank">
                        <button className="square-btn-allow">
                            <p className="m0 inline v-align">View Resume</p>
                            <span className="material-symbols-outlined ml-2 v-align">
                                open_in_new
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default Navbar;