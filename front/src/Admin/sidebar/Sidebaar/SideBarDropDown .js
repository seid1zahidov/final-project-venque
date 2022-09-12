import React from 'react'
import './SidebarDropDown.css'
import SideItems from './SideItems'
import {NavitemData} from './NavitemData'

const SideBarDropDown = () => {
    return (
        <div className='dropmenu' style={sideNavStyle}>
            <h2 className='admin' style={headerStyle}><a href='/admin'>Admin</a></h2>
            {NavitemData.map((navitem, index) => (
                <SideItems key={index} items={navitem} />
            ))}
        </div>
    )
}

const sideNavStyle = {
    height: "100vh",
    width: "260px",
    background: "#111",
    position: "fixed",
    border: "1px solid transparent",
    left: 0,
    textAlign: "left",
}
const headerStyle = {
    fontWeight: "400",
    padding: "0px 20px",
    color: "#fff",
    marginTop: "25px",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "35px"
}

export default SideBarDropDown 