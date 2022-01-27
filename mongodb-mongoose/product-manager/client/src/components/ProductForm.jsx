import React, {useState} from "react"
import axios from "axios"


const ProductForm = (props) => {
    let [title,setTitle] = useState("")
    let [price,setPrice] = useState("")
    let [description,setDescription] = useState("")
    let [formErrors, setFormErrors] = useState({})

    const clickHandler = (e) => {
        e.preventDefault()
        let ProductObject = {title, price, description}
        axios.post("http://localhost:8000/api/products/new", ProductObject)
            .then(res => {
                console.log(res)
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                }else{
                    props.setNewProduct(!props.newProd)
                }
            })
            .catch(err => console.log("error", err))
    }
    return (
        <div className="container w-50">
            <form onSubmit={clickHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <input type="submit" value="Create" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default ProductForm