import React, {useState} from "react";
const BoxForm = (props) => {
    let [boxColor, setBoxColor] = useState("");
    let [boxSize, setBoxSize] = useState("");
    let [listOfBoxes, setListOfBoxes] = useState([]);
    const createBox = (e) =>{
        e.preventDefault();
        let boxObject = {boxColor: boxColor, boxSize: boxSize + "px"};
        setListOfBoxes([...listOfBoxes, boxObject]);
    }
    return (
        <div>
            <h1>Create a box by size and color</h1>
            <form onSubmit={createBox}>
                <label htmlFor="">Box Color</label>
                <input type="text" name="" id="" onChange = {(e)=>setBoxColor(e.target.value)}/>
                <label htmlFor="">Box Size</label>
                <input type="number" onChange={(e)=>setBoxSize(e.target.value)}/>
                <input type="submit" value="Create Box"/>
            </form>
            <h2>Here's the boxes</h2>
            {
                listOfBoxes.map((box, index)=>{
                    return (
                        <div key={index} style={{backgroundColor: box.boxColor, height: box.boxSize, width: box.boxSize}}></div>
                    )
                })
            }
        </div>
    )
}
export default BoxForm