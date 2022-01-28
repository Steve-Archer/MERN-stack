import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Authors = () => {
    let [allAuthors, setAllAuthors] = useState([])
    let [deleted, setDeleted] = useState(false)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                let results = [...res.data.result]
                console.log(res.data.result)
                results.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                setAllAuthors(results)
                })
            .catch(err => {
                console.log("error: ", err) 
            })
                
    }, [deleted])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                setDeleted(!deleted)
            })
            .catch(err => console.log("error", err))
    }
    return (
        <div>
            <h5><Link to={"/new"}>Add an author</Link></h5>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {allAuthors.map((authorObj, i) =>{
                    return(
                        <tr key={i} className="border">
                            <td><h4>{authorObj.name}</h4></td>
                            <td>
                            <Link to={`/edit/${authorObj._id}`} className="btn btn-primary m-2">edit</Link>
                            <button onClick = {() => deleteAuthor(authorObj._id)} className="btn btn-primary m-2">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default Authors