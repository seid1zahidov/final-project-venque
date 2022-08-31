import React from 'react'
import './Sidebar.css'


  import { Link } from 'react-router-dom'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'

const Sidebar = () => {
  return (
    <div className="sidebarComponent">
    <div className="wrapper">
      <div className="menu">
        <h3>Dashboard</h3>
        <ul>
          <Link to='/Admin' className='link'>
            <li>
              Home
            </li>
          </Link>
          <li>
            Analytics
          </li>
          <li>
            Sales
          </li>
        </ul>
      </div>
      <div className="menu">
        <h3>Quick Menu</h3>
        <ul>
          <Link to='/users' className='link'>
            <li>
              Users
            </li>
          </Link>
          <Link to='/products' className='link'>
            <li>
              Products
            </li>
          </Link>
          <li>
            Transactions
          </li>
          <li>
            Reports
          </li>
        </ul>
      </div>
      <div className="menu">
        <h3>Notifications</h3>
        <ul>
          <li>
            Mail
          </li>
          <li>
            Feedback
          </li>
          <li>
            Messages
          </li>
        </ul>
      </div>
      <div className="menu">
        <h3>Staff</h3>
        <ul>
          <li>
            Manage
          </li>
          <li>
            Analytics
          </li>
          <li>
            Report
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar