import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"

const UpdateProduct = () => {
    const { id } = useParams();
    const history = useHistory();
    let [productInfo, setProductInfo] = useState({
        title: "",
        price: 0,
        description: ""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log("error:",err))
    },[])
    


    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo, [e.target.name]: e.target.value
        })
        
    }
    const updateSubmit = (e) => {
        console.log("testing")
        e.preventDefault();
        console.log(productInfo)
        axios.put(`http://localhost:8000/api/products/edit/${id}`, productInfo)
        .then(res => {
            console.log(res)
            history.push("/")
        })
        .catch(err => console.log("error:", err))
    }
    return (
        <div>
            <h3>Edit Products</h3>
            <form onSubmit = {updateSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" name="title" value={productInfo.title} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="number" name="price" value={productInfo.price} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input className="form-control" type="text" name="description" value={productInfo.description} onChange={changeHandler}/>
                </div>
                <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
        </div>
    )
}
export default UpdateProduct