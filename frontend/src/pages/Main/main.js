import React from "react";
import './main.css'

import { IconContext } from 'react-icons';
import { IoIosRocket  } from 'react-icons/io';
import { IoRocketOutline, IoNewspaperOutline } from 'react-icons/io5';
import { GiMarsCuriosity } from 'react-icons/gi';
import { FaInfoCircle, FaUserAstronaut } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

export default function Main() {

    return (
        
        <div className="main-background">

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
                        <h3 id="markthat">Rockets</h3>
                        
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
                        <h3 id="markthat">Running Space Projects</h3>
                        
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
             
        </div>
    )
}