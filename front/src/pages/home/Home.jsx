import React from 'react'
import Chart from '../../Admin/chart/Chart'
import FeaturedInfo from '../../Admin/featuredInfo/FeaturedInfo'
import WidgetLg from '../../Admin/widgetLg/WidgetLg'
import WidgetSm from '../../Admin/widgetSm/WidgetSm'
import './home.css'

const Home = () => {
  return (
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
  )
}

export default Home