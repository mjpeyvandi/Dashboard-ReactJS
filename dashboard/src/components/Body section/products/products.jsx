import {React, useState} from 'react'
import './products.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {AiFillHeart} from 'react-icons/ai'
import img5 from '../../../assets/img5.png'
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img4 from '../../../assets/img4.png'
import img6 from '../../../assets/img4.png'
import img3 from '../../../assets/img4.png'

const Products = ()=>{

    const [DataCard, setDataCard] = useState({
        Products:[
            {imgProduct:img5, titleProduct:'شقایق', priceProduct: 63000},
            {imgProduct:img1, titleProduct:'سایه', priceProduct: 135000},
            {imgProduct:img2, titleProduct:'نرگس', priceProduct: 38000},
            {imgProduct:img4, titleProduct:'سبزینه', priceProduct: 13000},
            {imgProduct:img5, titleProduct:'سانسوریا', priceProduct: 380000},
            {imgProduct:img6, titleProduct:'کاکتوس', priceProduct: 409000},
            {imgProduct:img3, titleProduct:'فیکوس', priceProduct: 230000},
            {imgProduct:img4, titleProduct:'بونسای نارون', priceProduct: 420000},
            {imgProduct:img2, titleProduct:'ونوس', priceProduct: 139000},
            {imgProduct:img3, titleProduct:'شفلرا', priceProduct: 91000},
            
        ]
            
    })


    const navigate = useNavigate()

    const dataHandler = (img,title,price)=> {

        navigate(
            "/products/"+title,
            {state: {img,title,price}}
        )
    }



    return(
        <div className="containerProducts flex">

            {DataCard.Products.map((Data) => (
                <div className="singleItem" id={Data} onClick={() => {dataHandler(Data.imgProduct,Data.titleProduct, Data.priceProduct)}}>
                    <Link to={'/products/'+ Data.titleProduct} className='link'>
                        
                        <AiFillHeart className="icon"/>
                        <img src={Data.imgProduct} alt=""/>
                    </Link>

                        <h3>{Data.titleProduct}</h3>
                        <h3>{Data.priceProduct} <small> تومان</small></h3>

                </div>
            )) }
                

        </div>

    )
}

export default Products