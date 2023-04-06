import React,{useState} from 'react'
import './listing.css'
import { Link } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import img5 from '../../../assets/img5.png'
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img4 from '../../../assets/img4.png'
import user1 from '../../../assets/user1.jpeg'
import user2 from '../../../assets/user2.jpg'
import user3 from '../../../assets/user3.jpg'
import user4 from '../../../assets/user4.jpg'


const Listing = ()=>{

    const [DataCard, setDataCard] = useState({
        Products:[
            {imgProduct:img5, titleProduct:'شقایق', priceProduct: 63000},
            {imgProduct:img1, titleProduct:'سایه', priceProduct: 135000},
            {imgProduct:img2, titleProduct:'نرگس', priceProduct: 38000},
            {imgProduct:img4, titleProduct:'سبزینه', priceProduct: 13000},
        ]
            
    })


    return(
        <div className="listingSection">
            <div className="headingSection flex">
                <Link to={'/products'}>
                <button className="btn flex">
                    مشاهده همه <BsArrowLeftShort className="icon"/>
                </button>
                </Link>
                <h2>پیشنهاد ها</h2>
            </div>

            <div className="secContainer flex">

            {DataCard.Products.map((Data) => (
                <div id={Data} className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={Data.imgProduct} alt=""/>
                    <h3>{Data.titleProduct}</h3>
                    <h3>  {Data.priceProduct} <small>تومان</small> </h3>
                </div>

            )) }
                

            </div>
        
            <div className="sellers flex">
                <div className="featurSellers">

                        <div className="headingSellers flex">
                            <Link to={'/products'}>
                            <button className="btn flex">
                            مشاهده همه <BsArrowLeftShort className="icon"/>
                            </button>
                            </Link>
                            <h1>فروش ویژه</h1>
                        </div>

                        <div className="card flex">
                            <div className="users">
                                <img src={user1} alt=""/>
                                <img src={user2} alt=""/>
                                <img src={user3} alt=""/>
                                <img src={user4} alt=""/>
                            </div>

                            <div className="cardTxt">
                                <span>
                                    28/326 فروش در سایت <br/>  
                                    <small>
                                    <span className="Date">31 روز</span>   فروشنده 18
                                    </small>
                                 </span>
                            </div>
                        </div>
                    </div>
                <div className="topSellers">

                    <div className="headingSellers flex">
                        <Link to={'/products'}>
                        <button className="btn flex">
                        مشاهده همه <BsArrowLeftShort className="icon"/>
                        </button>
                        </Link>
                        <h1>بیشترین فروش</h1>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt=""/>
                            <img src={user2} alt=""/>
                            <img src={user3} alt=""/>
                            <img src={user4} alt=""/>
                        </div>

                        <div className="cardTxt">
                            <span>
                                14/556 فروش در سایت <br/>  
                                <small>
                                <span className="Date">12 روز</span>   فروشنده 28
                                </small>
                             </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Listing