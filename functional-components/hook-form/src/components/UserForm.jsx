import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    
    
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="">First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Password </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirm(e.target.value)}/>
                </div>
            </form>
            <div>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirmed Password: {confirm} </p>
            </div>
        </div>
        
    )
}
export default UserForm