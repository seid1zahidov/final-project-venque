import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";

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

    </Nav>
  )
}

export default Sidebars