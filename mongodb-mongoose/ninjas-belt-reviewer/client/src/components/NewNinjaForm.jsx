import react, {useState} from "react";
import axios from 'axios';

const NewNinjaForm = () => {
    let [firstName,setFirstName] = useState("")
    let [lastName,setLastName] = useState("")
    let [numBelts,setNumBelts] = useState(0)
    let [isVeteran,setIsVeteran] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        let formInfoObj = {firstName, lastName, numBelts, isVeteran}
        axios.post("http://localhost:8000/api/ninjas", formInfoObj)
            .then(res=>{
                console.log("response", res)
                res.json()

            })
            .catch(err=>console.log("error", err))
    } 

    return (
        <div className="container w-50">
            <form onSubmit={submitHandler} >
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e)=>{setLastName(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>{setNumBelts(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran</label>
                    <input type="checkbox" name="" id="" className="form-checkbox" onChange={(e)=>{setIsVeteran(e.target.checked)}}/>
                </div>
                <input type="submit" value="Create Ninja" className="btn btn-success" />
            </form>
        </div>
    )
}
export default NewNinjaForm