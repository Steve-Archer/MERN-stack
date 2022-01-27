import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const AllProducts = () => {
    
    let [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setAllProducts(res.data.results)
            })
            .catch(err=> console.log("error: ", err))
    },[])
    return (
        <div>
            <h1>All Products</h1>
            {allProducts.map((itemObject, index) =>{
                return(
                    <div key={index}>
                        <h4><Link to={`/products/${itemObject._id}`}>{itemObject.title}</Link></h4>
                    </div>
                )
            })}
        </div>
    )
}
export default AllProducts