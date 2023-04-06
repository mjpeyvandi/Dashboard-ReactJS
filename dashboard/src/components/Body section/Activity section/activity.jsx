import React from 'react'
import './activity.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import user1 from '../../../assets/user1.jpeg'
import user2 from '../../../assets/user2.jpg'
import user3 from '../../../assets/user3.jpg'
import user4 from '../../../assets/user4.jpg'

const Activity = ()=>{
    return(
        <div className="activitySection">
            <div className="heading flex">
                <button className="btn flex">
                    مشاهده همه <BsArrowLeftShort className="icon"/>
                </button>
                <h2>فعالیت های اخیر</h2>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <div className="duration" dir="rtl">
                        2 دقیقه پیش
                    </div>
                    
                    <div className="customerDeatails" dir="rtl">
                        <span className="name">مریم ابراهیمی</span> 
                        <small>محصولی جدید اضافه کرد</small>
                    </div>
                    <img src={user1} alt=""/>

                </div>
                <div className="singleCustomer flex">
                    <div className="duration" dir="rtl">
                        2 دقیقه پیش
                    </div>
                    
                    <div className="customerDeatails" dir="rtl">
                        <span className="name">مریم ابراهیمی</span> 
                        <small>محصولی جدید اضافه کرد</small>
                    </div>
                    <img src={user2} alt=""/>

                </div>
                <div className="singleCustomer flex">
                    <div className="duration" dir="rtl">
                        2 دقیقه پیش
                    </div>
                    
                    <div className="customerDeatails" dir="rtl">
                        <span className="name">مریم ابراهیمی</span> 
                        <small>محصولی جدید اضافه کرد</small>
                    </div>
                    <img src={user3} alt=""/>

                </div>
                <div className="singleCustomer flex">
                    <div className="duration" dir="rtl">
                        2 دقیقه پیش
                    </div>
                    
                    <div className="customerDeatails" dir="rtl">
                        <span className="name">مریم ابراهیمی</span> 
                        <small>محصولی جدید اضافه کرد</small>
                    </div>
                    <img src={user4} alt=""/>

                </div>
            </div>
        </div>
    )
}

export default Activity