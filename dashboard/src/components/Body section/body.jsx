import React from 'react'
import './body.css'
import Top from './Top section/top'
import Listing from './Listing section/listing'
import Activity from './Activity section/activity'

const Body = ()=>{
    return(
        <div className='mainContent'>
            <Top/>

            <div className="bottom flex">
                <Activity/>
                <Listing/>
            </div>
        </div>
    )
}

export default Body