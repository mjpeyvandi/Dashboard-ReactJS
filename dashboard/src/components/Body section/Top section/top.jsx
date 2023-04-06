import React from 'react'
import './top.css'
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowLeftShort,
    BsQuestionCircle} from 'react-icons/bs'
import admin from '../../../assets/admin.jpg'
import videoRain from '../../../assets/videoRain.mp4'
import img1 from '../../../assets/img1.png'

const Top = ()=>{
    return(
        <div className='topSection'>
        
            <div className="headerSection flex">

                <div className="adminDiv flex">
                <div className="adminImage">
                         <img src={admin} alt=""/>
                    </div>
                    <TbMessageCircle className="icon"/>
                    <MdOutlineNotificationsNone className="icon"/>
                    
                </div>

                <div className="searchBar flex">
                    <BiSearchAlt className="icon"/>
                    <input type="text" placeholder="جستجو در پنل کاربری"/>
                </div>

                <div className="titleTop">
                    <h1>به فروشگاه گل و گیاه خوش آمدید</h1>
                    <p>درود کاربر عزیز؛ روزت بخیر</p>
                </div>

              

            </div>
            <div className="cardSection flex">

            <div className="leftCard flex">
                <div className="sidebarCard">
                        <BsQuestionCircle className='icon'/>

                        <div className="cardContent">
                            <div className="circle1"></div>
                            <div className="circle2"></div>

                            <h3>پشتیبانی فروشگاه</h3>
                            <p>در صورت نیاز به خدمات پشتیبانی و یا مشاوره خرید هر ساعت پاسخگو هستیم.</p>
                            <button className="btn">ارتباط با پشتیبانی</button>
                        </div>
                    </div>
                <div className="main flex">

                    <div className="imgDiv">
                        <img src={img1} alt="img1"/>
                    </div>

                    <div className="textDiv">
                        <h1>فعالیت من</h1>

                        <div className="flex">

                            <span>
                                در ماه <br/> <small dir="rtl">175 سفارش</small>
                            </span>
                            <span>
                                امروز <br/> <small dir="rtl" >4 سفارش</small>
                            </span>

                        </div>

                         <div className="link flex">
                         <BsArrowLeftShort className="icon"/> برو به سفارشات من 
                         </div>




                    </div>
                
                </div>
                
            </div>

                <div className="rightCard flex">
                    <h1>گیاهان خودت رو پرورش بده و بفروش</h1>
                    <p>در دنیای امروز محصولات طبیعی با سرعت در حال رشد هستند!</p>
                    
                    <div className="buttons flex">
                        <button className="btn">محصولات بیشتر</button>
                        <button className="btn transparent">بیشترین فروش</button>
                    </div>

                    <div className="videoDiv">
                        <video src={videoRain} autoPlay loop muted></video>
                    </div>
                </div>

            </div>
        </div>  
    )
}

export default Top