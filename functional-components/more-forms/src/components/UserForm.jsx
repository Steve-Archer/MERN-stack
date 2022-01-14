import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label htmlFor="">First Name: </label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
                    {
                        firstName.length < 2
                        ? <p>- First name must be at least two characters -</p>
                        : ""
                    }
                </div>
                <div>
                    <label htmlFor="">Last Name: </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
                    {
                        lastName.length < 2
                        ? <p>- Last name must be at least two characters -</p>
                        : ""
                    }
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
                    {
                        email.length < 5
                        ? <p>- Email must be at least five characters -</p>
                        : ""
                    }
                </div>
                <div>
                    <label htmlFor="">Password </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) }/>
                    {
                        password.length < 8
                        ? <p>- Password must be at least eight characters -</p>
                        : ""
                    }
                </div>
                <div>
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirm(e.target.value) }/>
                    {
                        confirm != password
                        ? <p>- Passwords must match -</p>
                        : ""
                    }
                </div>
                <input type="submit" value="Submit" />
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