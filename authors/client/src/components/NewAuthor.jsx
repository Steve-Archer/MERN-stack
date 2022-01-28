import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import {useHistory} from "react-router-dom"

const NewAuthor = () => {
    let [name, setName] = useState("")
    let [formErrors, setFormErrors] = useState({})
    const history = useHistory()

    const clickHandler = (e) => {
        e.preventDefault()
        let authorObj = {name}
        axios.post("http://localhost:8000/api/authors/new", authorObj)
            .then(res=> {
                if(res.data.error){
                    setFormErrors(res.data.error.errors)
                    console.log(res)
                } else {
                    history.push("/")
                }
            })
            .catch(err => console.log("error:", err))
    }
    return (
        <div>
            <p><Link to={"/"}>Home</Link></p>
            <h5>Add a new author</h5>
            <form onSubmit={clickHandler}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={(e) => {setName(e.target.value)}}/>
                    {<p>{formErrors.name?.message}</p>}
                </div>
                <input type="submit" value="create" className="btn btn-secondary"/>
            </form>
        </div>
    )


}
export default NewAuthor