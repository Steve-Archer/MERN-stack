import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
    let [input, setInput] = useState("people")
    let [num, setNum] = useState(1)
    let history = useHistory()
    const clicker = (e) => {
        e.preventDefault()
        history.push(`/${input}/${num}`)
    }
    return (
        <div>
            <form onSubmit={clicker}>
                <label>Search For</label>
                <select onChange={(e) => setInput(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID</label>
                <input type="number" onChange={(e) => setNum(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
export default Form
