import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router";

const ProductInfo = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});
    
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProductInfo(res.data.results)
            console.log (res)
        })
        .catch(err => console.log("error",err))
    },[])
    
    
    return (
        <div>
            <h3>{productInfo.title}</h3>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>
        </div>
    )
}
export default ProductInfo;