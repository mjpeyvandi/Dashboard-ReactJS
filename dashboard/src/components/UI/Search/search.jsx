import {React,useState} from "react";
import './search.css'
import { Link, useNavigate } from "react-router-dom";
import {BiSearchAlt} from 'react-icons/bi'
import img5 from '../../../assets/img5.png'
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img4 from '../../../assets/img4.png'
import img6 from '../../../assets/img4.png'
import img3 from '../../../assets/img4.png'



const Search = ({data})=>{

    const [product, setProduct] = useState({
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
    const [dataFilter,setDataFilter] = useState([])

    const navigate = useNavigate()

    const searchHandler = (event) =>{

        if(event.target.value.length >=1){
            const dataSearch = [event.target.value]
            const resualt = product.Products.filter((value)=>{
            return value.titleProduct.includes(dataSearch)
        })

        if(dataSearch === ''){
            setDataFilter([])
        }else{
            setDataFilter(resualt)
        }
    }
        
    }

    const selectProductHandler = (title, img, price) =>{

        navigate(
            '/products/'+title,
            {state: {title,img,price}}
        )
    }


    return(

        <>
        <div className="search">
            <div className="searchBar flex">
                <BiSearchAlt className="icon" />
                <input type="text" placeholder="جستجو محصول در پنل کاربری" onChange={searchHandler} />
            </div>
            {dataFilter.length !=0 && (

                <div className="dataResult">
                {dataFilter.map((value, key) => (
                    <div className="dataItem" onClick={()=>{
                        selectProductHandler( value.titleProduct, value.imgProduct, value.priceProduct )}}>
                    <Link to={'/products/' + value.titleProduct} id={key} className="dataItem">
                        <p>
                        {value.titleProduct}</p>
                    </Link>
                    </div>
                ))}
                </div>

            )}
            
        </div>
        
            
            
        </>
        
        
    )
}

export default Search