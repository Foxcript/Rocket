import React from "react";
import '../News/news.css'
import '../Rockets/rockets.css'

import { IconContext } from 'react-icons';
import { IoIosRocket  } from 'react-icons/io';
import { IoRocketOutline, IoNewspaperOutline } from 'react-icons/io5';
import { GiMarsCuriosity } from 'react-icons/gi';
import { FaInfoCircle, FaUserAstronaut } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

import { createBrowserHistory } from "history";
let history = createBrowserHistory();

export default function News() {

    function GoToLaunchVehicles() {

        history.push('/')
        window.location.reload()

    }

    return (

        <div className="news-main-background">

                <nav className="header-main-container"> 

                    <div className="logo-container">
                        <div className="header-sub-container">

                            <IconContext.Provider value={{className:"rocket-header-logo-icon"}}>
                                <IoIosRocket/>
                            </IconContext.Provider>

                            <h2 className="header-title">Rocketzy</h2>

                        </div>
                    </div>

                    <div className="nav-container">
                        <div  onClick={ ()=> GoToLaunchVehicles() } className="header-sub-container">
                            
                            <IconContext.Provider id="markthat" value={{className:"rocket-header-container-icon"}}>
                                <IoRocketOutline id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat">Lauch Vehicles</h3>
                            
                        </div>
                        <div className="header-sub-container">
                            
                            <IconContext.Provider  value={{className:"rocket-header-container-icon nav-mark-icon"}}>
                                <IoNewspaperOutline id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat" className="nav-mark-news">News</h3>
                            
                        </div>
                        <div className="header-sub-container">
                            
                            <IconContext.Provider value={{className:"rocket-header-container-icon"}}>
                                <GiMarsCuriosity id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat">Missions</h3>
                            
                        </div>
                        <div className="header-sub-container">
                            
                            <IconContext.Provider value={{className:"rocket-header-container-icon"}}>
                                <FaInfoCircle id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat">About</h3>
                            
                        </div>
                    </div>

                    <div className="user-account-container">


                    <div className="user-account-container">

                        <IconContext.Provider value={{className:"user-account-icon"}}>
                            <FaUserAstronaut id="shadowAccount"/>
                        </IconContext.Provider>
                        <h3 id="shadowAccount">Railson</h3>
                        <IconContext.Provider value={{className:"logout-button-icon"}}>
                            <MdLogout title="Logout" />
                        </IconContext.Provider>               
                    </div>

                    </div>

                </nav>

                {/* #### ONLY FOR INITIAL DESIGN CONCEPT, WILL CHANGE WITH BACKEND BUILD. THE ACTUAL INFO ON CARDS ARE EXAMPLES! #### */}
                <div className="body-main-news-container">

                    <div className="body-card-news-container">

                        <a href="https://www.nasa.gov/directorates/spacetech/sbir_sttr/What_Working_with_NASA_means_to_US_Small_Businesses/" target="parent">

                            {/* <div> */}
                            <img src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/icecube_deployment_0.jpg?itok=tna2HORZ" alt="news-image" />
                            {/* </div> */}
                            <h1>What Working With NASA Means to US Small Businesses</h1>
                            <h2>By NASA</h2>

                        </a>

                    </div>
                    <div className="body-card-news-container">

                        <a href="https://www.nasa.gov/press-release/nasa-s-aviation-tech-to-roll-out-to-airports-save-time-for-passengers" target="parent">

                            {/* <div> */}
                            <img src="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/dsc_0007.jpg?itok=EaSxdZ-t" alt="news-image" />
                            {/* </div> */}
                            <h1>NASA’s Aviation Tech to Roll Out to Airports, Save Time for Passengers</h1>
                            <h2>By NASA</h2>

                        </a>

                    </div>
                    <div className="body-card-news-container">

                        <a href="https://www.nasa.gov/" target="parent">

                            {/* <div> */}
                            <img src="https://f.i.uol.com.br/fotografia/2021/11/16/16370701506193b546b6d17_1637070150_3x2_xl.jpg" alt="news-image" />
                            {/* </div> */}
                            <h1>News Title</h1>
                            <h2>News Description</h2>

                        </a>

                    </div>
                    <div className="body-card-news-container">

                        <a href="https://www.nasa.gov/" target="parent">

                            {/* <div> */}
                            <img src="https://f.i.uol.com.br/fotografia/2021/11/16/16370701506193b546b6d17_1637070150_3x2_xl.jpg" alt="news-image" />
                            {/* </div> */}
                            <h1>News Title</h1>
                            <h2>News Description</h2>

                        </a>

                    </div>
                    <div className="body-card-news-container">

                        <a href="https://www.nasa.gov/" target="parent">

                            {/* <div> */}
                            <img src="https://f.i.uol.com.br/fotografia/2021/11/16/16370701506193b546b6d17_1637070150_3x2_xl.jpg" alt="news-image" />
                            {/* </div> */}
                            <h1>News Title</h1>
                            <h2>News Description</h2>

                        </a>

                    </div>

                </div>

        </div>

    )
}