import React from 'react'
import Chart from '../../Admin/chart/Chart'
import FeaturedInfo from '../../Admin/featuredInfo/FeaturedInfo'
import Sidebar from '../../Admin/sidebar/Sidebar'
import WidgetLg from '../../Admin/widgetLg/WidgetLg'
import WidgetSm from '../../Admin/widgetSm/WidgetSm'
import './home.css'
import SideBarDropDown from '../../Admin/sidebar/Sidebaar/SideBarDropDown '

const Home = () => {
  return (
   <section id='Home'>
    <div className="col-lg-3 deneme1">
    <SideBarDropDown/>
    </div>
    <div className="col-lg-9 deneme">
    <div className='homePage'>
    <FeaturedInfo />
    <Chart 
      dataKey={'Active User'}
      grid={true}
      title={'User Analytics'}
    />
    <div className="widgets">
      <WidgetSm />
      <WidgetLg />
    </div>
  </div>
    </div>
   </section>
  )
}

export default Home