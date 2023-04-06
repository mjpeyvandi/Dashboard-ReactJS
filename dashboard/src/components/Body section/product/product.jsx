import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './product.css'
import {AiFillHeart} from 'react-icons/ai'


const Product = ()=> {

    const { id } = useParams()

    const location = useLocation()

    return(
        <div className="secContainer flex">

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={location.state.img} alt=""/>
                    <h3>{location.state.title}</h3>

                </div>

            

        </div>
    )
}

export default Product