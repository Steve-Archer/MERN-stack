import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
const UpdateAuthor = () => {
    let [name, setName] = useState({ name: "" })
    let [formErrors, setFormErrors] = useState({})
    let [error, setError] = useState(false)
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                if(res.data.error){
                    setError(true)
                }else{
                    setError(false)
                    setName(res.data.result)
                }
            })
            .catch(err => {
                console.log("error:", err)
            })
    }, [])


    const clickHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, name)
            .then(res => {
                if (res.data.error) {
                    setFormErrors(res.data.error.errors)
                    console.log(res)
                } else {
                    history.push("/")
                }
            })
            .catch(err => console.log("error:", err))
    }
    const changeHandle = (e) => {
        setName({
            ...name, [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            {
                error ==true
                    ?
                    <div>
                        <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to the database?</p>
                        <Link to={"/new"}><p>Add author</p></Link>
                    </div> 
                    :
                    <div>
                        <p><Link to={"/"}>Home</Link></p>
                        <h5>Edit this author</h5>
                        <form onSubmit={clickHandler}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" value={name.name} onChange={changeHandle} />
                                {<p>{formErrors.name?.message}</p>}
                            </div>
                            <input type="submit" value="create" className="btn btn-secondary"/>
                        </form>
                    </div>
            }
        </div>
    )
}
export default UpdateAuthor
