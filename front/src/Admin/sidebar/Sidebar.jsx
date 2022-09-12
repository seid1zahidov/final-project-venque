import React from 'react'
import { Link } from 'react-router-dom'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Nav } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebars = () => {
  return (
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
    activeKey="/home"
    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
  >
    <div className="sidebar-sticky"></div>
    <Nav.Item className='mt-5'>
      <Nav.Link className='eyni' href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href="/Admin">Dashboard</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/cart' eventKey="link-1">Cart</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/cartdetails' eventKey="link-2">Cartdetails</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/shopimgAdd ' eventKey="link-2">Shop Image Add</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/Shopimgdetails ' eventKey="link-2">Shop Image Details</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/HelpimgAdd ' eventKey="link-2">Help Image Add</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/Helpdetails ' eventKey="link-2">Help Details</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='eyni' href='/Complaint' eventKey="link-2">Complaint</Nav.Link>
    </Nav.Item>
    

  </Nav>
  )
}

export default Sidebars