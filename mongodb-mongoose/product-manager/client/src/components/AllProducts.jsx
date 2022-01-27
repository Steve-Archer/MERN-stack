import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const AllProducts = (props) => {
    
    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setAllProducts(res.data.results)
            })
            .catch(err=> console.log("error: ", err))
    },[deleted, props.newProduct])
    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            setDeleted(!deleted)
        })
        .catch(err=>console.log("error:", err))
    }



    return (
        <div>
            <h1>All Products</h1>
            {allProducts.map((itemObject, index) =>{
                return(
                    <div key={index}>
                        <h4><Link to={`/products/${itemObject._id}`}>{itemObject.title}</Link></h4>
                        <Link to={`/products/edit/${itemObject._id}`} className="btn btn-primary">Update</Link>
                        <button onClick = {() => deleteProduct(itemObject._id)} className="btn btn-primary">Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default AllProducts