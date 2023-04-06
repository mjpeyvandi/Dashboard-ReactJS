import {React,useState} from "react";
import './addProducts.css'


const Add = ()=>{

    const [newProduct, setNewProduct] = useState({
        name:'',
        img:'',
        price:''
    })
    const [err, setErr] = useState()
    const [stateBtn, setStateBtn] = useState(false)

    const onInputchange = (event)=>{
        event.preventDefault();
        setNewProduct({ ...newProduct,
             [event.target.name]: event.target.value})
    }

    const checkValid = ()=>{

        const formErr = {}

        if(newProduct.name.length <= 1){
            formErr.nameErr = 'نام باید حداقل 2 کاراکتر باشد'
        }else{formErr.nameErr = ''}

        if(newProduct.img === ''){
            formErr.imgErr = 'انتخاب تصویر الزامی است'
        }else{formErr.imgErr = ''}

        if(newProduct.price.length < 4){
            formErr.priceErr = 'حداقل قیمت هر محصول باید 1000 تومان باشد'
        }else{formErr.priceErr = ''}

        setErr({...formErr})

        return Object.keys(formErr) < 1;
    }

    const onSubmit = ()=>{
        console.log(newProduct)
        const isValid = checkValid()

        if(isValid){
            setStateBtn(true)
        }else{
            setStateBtn(false)
        }

    }
    return(
                
        <div className="secContainer">
            <div className="dataSection">
                <div className="uploadCard flex">
                    <input type="text" placeholder="نام محصول جدید"
                     value={newProduct?.name} name="name"
                      onChange={onInputchange}  required/>
                    <h1>نام محصول خود را وارد کنید:</h1>
                </div>
                <label htmlFor="name" className="lbl">{err?.nameErr}</label>

                <div className="uploadCard flex">
                    <input type="file" className="fileInput"
                     value={newProduct?.img} name="img"
                      onChange={onInputchange} required/>
                    <h1>تصویر محصول را بارگذاری کنید:</h1>
                </div>
                <label htmlFor="img" className="lbl">{err?.imgErr}</label>


                <div className="uploadCard flex" required>
                    <input type="number" placeholder=" قیمت محصول جدید "
                     value={newProduct?.price} name="price"
                      onChange={onInputchange} required/>
                    <h1>قیمت محصول خود را وارد کنید:</h1>
                </div>
                <label htmlFor="price" className="lbl"> {err?.priceErr} </label>


                <div className="uploadCard flex">
                    <textarea type="text" className="decInput" 
                    placeholder=" توضیحات محصول جدید " required/>
                    <h1>توضیحاتی را درباره محصول جدید بنویسید:</h1>
                </div>
                
                <button type="submit" className="btn" 
                onClick={onSubmit}>
                    انتشار محصول
                </button>
            </div>
        </div>
    )
}


export default Add