import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProductInfo = () => {
    const { id } = useParams();
    let [productInfo, setProductInfo] = useState({});
    const history = useHistory();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProductInfo(res.data.results)
            console.log (res)
        })
        .catch(err => console.log("error",err))
    },[])
    
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            history.push("/")
        })
        .catch(err=>console.log("error:", err))
    }
    
    return (
        <div>
            <h3>{productInfo.title}</h3>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>
            <button onClick = {deleteProduct} className="btn btn-primary">Delete</button>
        </div>
    )
}
export default ProductInfo;