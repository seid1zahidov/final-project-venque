import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './featurenInfo.css'

const FeaturedInfo = () => {
  return (
    <div className="FeaturedInfo">
      <div className="col-lg-2">
      </div>
      <div className="col-lg-10">
      <div className='featuredInfoComponent'>
    <div className='item'>
      <span className='title'>Revanue</span>
      <div>
        <span className='money'>$2,415</span>
        <span className='moneyRate'>
           -11,4 
        </span>
      </div>
      <span className='sub'>Compared to last month</span>
    </div>

    <div className='item'>
      <span className='title'>Sales</span>
      <div>
        <span className='money'>$5,315</span>
        <span className='moneyRate'>
           -1,4 
        </span>
      </div>
      <span className='sub'>Compared to last month</span>
    </div>

    <div className='item'>
      <span className='title'>Cost</span>
      <div>
        <span className='money'>$2,215</span>
        <span className='moneyRate'>
           +12,4 
        </span>
      </div>
      <span className='sub'>Compared to last month</span>
    </div>
  </div>
      </div>
    </div>
  )
}

export default FeaturedInfo