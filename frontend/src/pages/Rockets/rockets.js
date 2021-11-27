import React from "react";
import './rockets.css'
import '../Main/main.css'

import { IconContext } from 'react-icons';
import { IoIosRocket  } from 'react-icons/io';
import { IoRocketOutline, IoNewspaperOutline } from 'react-icons/io5';
import { GiMarsCuriosity } from 'react-icons/gi';
import { FaInfoCircle, FaUserAstronaut } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

export default function Rockets() {


    return (

        <div className="main-rockets-background">

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
                        <div className="header-sub-container">
                            
                            <IconContext.Provider id="markthat" value={{className:"rocket-header-container-icon"}}>
                                <IoRocketOutline id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat" className="nav-mark">Rockets</h3>
                            
                        </div>
                        <div className="header-sub-container">
                            
                            <IconContext.Provider  value={{className:"rocket-header-container-icon"}}>
                                <IoNewspaperOutline id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat">News</h3>
                            
                        </div>
                        <div className="header-sub-container">
                            
                            <IconContext.Provider value={{className:"rocket-header-container-icon"}}>
                                <GiMarsCuriosity id="markthat"/>
                            </IconContext.Provider>
                            <h3 id="markthat">Space Missions</h3>
                            
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

            <div className="body-rocket-main-container">

                <div className="body-rocket-sub-container">

                    <div className="body-rocket-left-container">

                        <div className="card-rocket-main-container">
                            
                            <img className="rocket-image" src="https://space.skyrocket.de/img_lau/falcon-9-v1-2__iridium-next-1__1.jpg" alt="rocket"/>

                            <div className="rocket-data">

                                <h1>Falcon 9</h1>
                                <h3>Version: 1.3 (Last)</h3>
                                <h3>Height: 70m</h3>
                                <h3>Weight: 730t</h3>
                                <h3>Engine: Merlin (x9)</h3>
                                <h3>Reusable: Yes</h3>
                                <h3>Reflights: 5x</h3>
                                <a href="http://localhost:3000/report/falcon-9-rocket">See complete report</a>

                            </div>

                        </div>
                        <div className="card-rocket-main-container">
                            
                            <img className="rocket-image" src="https://space.skyrocket.de/img_lau/falcon-heavy__tesla-roadster__2.jpg" alt="rocket"/>

                            <div className="rocket-data">

                                <h1>Falcon Heavy</h1>
                                <h3>Version: 1.3 (Last)</h3>
                                <h3>Height: 70m</h3>
                                <h3>Weight: 930t</h3>
                                <h3>Engine: Merlin (x27)</h3>
                                <h3>Reusable: Yes</h3>
                                <h3>Reflights: 5x</h3>
                                <a href="http://localhost:3000/report/falcon-9-rocket">See complete report</a>

                            </div>

                        </div>
                        <div className="card-rocket-main-container">
                            
                            <img className="rocket-image" src="https://space.skyrocket.de/img_lau/delta-4h__demosat__2.jpg" alt="rocket"/>

                            <div className="rocket-data">

                                <h1>Delta 4H</h1>
                                <h3>Version: 1.3 (Last)</h3>
                                <h3>Height: 65m</h3>
                                <h3>Weight: 1500t</h3>
                                <h3>Manufacturer: ULA (United Lauch Aliance)</h3>
                                <h3>Country: EUA</h3>
                                <h3>Reusable: No</h3>
                                <a href="http://localhost:3000/report/falcon-9-rocket">See complete report</a>

                            </div>

                        </div>
                        <div className="card-rocket-main-container">
                            
                            <img className="rocket-image" src="https://space.skyrocket.de/img_lau/delta-4m52__nrol-25__2.jpg" alt="rocket"/>

                            <div className="rocket-data">

                                <h1>Delta 4M +</h1>
                                <h3>Version: 1.3 (Last)</h3>
                                <h3>Height: 65m</h3>
                                <h3>Weight: 680t</h3>
                                <h3>Manufacturer: ULA (United Lauch Aliance)</h3>
                                <h3>Country: EUA</h3>
                                <h3>Reusable: No</h3>
                                <a href="http://localhost:3000/report/falcon-9-rocket">See complete report</a>

                            </div>

                        </div>
                        
                        

                    </div>
                    <div className="body-rocket-right-container">

                       

                    </div>

                </div>

            </div>

        </div>

    )

}