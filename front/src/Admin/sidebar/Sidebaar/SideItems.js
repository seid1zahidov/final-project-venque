import React from 'react'

const SideItems = ({ items }) => {


    const { name, links, open } = items
    const [isOpen, setOpen] = React.useState(open);

    const OpenSideNav = () => {
        setOpen(!isOpen)
    }



    return (
        <div onClick={() => OpenSideNav()} style={sideItemStyle}>
            <p style={nameStyle}>{name}</p>
            {isOpen && links.map((links, index) => {
                const { title, to } = links
                return (
                    <div key={index} style={linkContainerStyle}>
                        <a href={to} style={linkStyle}>
                            <p style={nameStyle}>{title}</p>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

const linkContainerStyle={
    height:"auto",
    width:"259px",
    background:"#262626",
    borderTop:"1px solid #d6d6d6",
}

const nameStyle={
    margin:"22px",
    fontWeight:"600",
    cursor: "pointer"
}

const sideItemStyle = {
    height: 'auto',
    minHeight: "70px",
    width: "259px",
    color: "#fff",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
}

const linkStyle = {
    textDecoration: 'none',
    transition: ".6s"

}
export default SideItems