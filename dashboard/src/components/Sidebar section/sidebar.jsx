import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import logo from '../../assets/logo.png'
import {IoMdSpeedometer} from "react-icons/io"
import {BsTrophy,
    BsCreditCard2Front,
    BsQuestionCircle} from "react-icons/bs"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiTrendingUp} from "react-icons/bi"
import {
    MdDeliveryDining,
    MdOutlineExplore,
    MdOutlinePermContactCalendar} from "react-icons/md"

const Sidebar = ()=>{
    return(
        <div className="sidebar grid">
            <div className="logoDiv flex">
                <h2>گل و گیاه</h2>
                <img src={logo} alt=""/>
            </div>

            <div className="menuDiv">
                

                <ul className="menuLists grid">

                    <h3 className="titleMenu">
                        دسترسی سریع
                    </h3>   
                    <li className="listItem">
                        <Link to="/" className="menuLink flex">
                            <span className="smallText">
                            پنل
                            </span>
                            <IoMdSpeedometer className="icon"/>

                        </Link>
                        
                    </li>

                    
                    <li className="listItem">
                        <Link to="/products" className="menuLink flex">
                            <span className="smallText">
                             محصولات من
                            </span>
                        <BsTrophy className="icon"/>

                        </Link>
                        
                    </li>

                    <li className="listItem">
                        <Link to="/add" className="menuLink flex">
                            <span className="smallText">
                             اضافه کردن محصول 
                           </span>
                           <MdOutlineExplore className="icon"/>

                        </Link>
                        
                    </li>

                    <li className="listItem">
                        <Link to="/orders" className="menuLink flex">
                            <span className="smallText">
                            سفارش های مشتریان
                            </span>
                            <MdDeliveryDining className="icon"/>

                        </Link>
                        
                    </li>

                    
                </ul>
            </div>
            <div className="settingDiv">

                
        
                <ul className="menuLists grid">

                     <h3 className="titleMenu">
                         تنظیمات 
                     </h3>
                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="smallText">
                            نمودار بررسی
                            </span>
                            <AiOutlineCheckCircle className="icon"/>

                        </a>
                        
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="smallText">
                            معاملات
                            </span>
                            <BiTrendingUp className="icon"/>

                        </a>
                        
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="smallText">
                            مخاطبین
                           </span>
                           <MdOutlinePermContactCalendar className="icon"/>

                        </a>
                        
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="smallText">
                            افزایش اعتبار
                             </span>
                             <BsCreditCard2Front className="icon"/>

                        </a>
                        
                    </li>
                </ul>
            </div>
        
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
        </div>
    )
}

export default Sidebar