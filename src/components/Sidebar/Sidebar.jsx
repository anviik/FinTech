import React from "react";
import './Sidebar.css'
import {UilEstate} from '@iconscout/react-unicons'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src="{src/imgs/logo.png}" alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/* menu */}
            <div className="menu">
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
                <div className="menuItem">
                    <div>
                        <UilEstate/>
                    </div>
                    <span>Dashboard</span>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar

