import React from "react";
import { useParams } from "react-router-dom";

const TextAndColors = () => {
    const { text, color="black", backgroundColor="white" } = useParams()
    return (
        <div style={{ color: `${color}`, backgroundColor: `${backgroundColor}` }}>
            {isNaN(text) ?
                <h1>The word is {text}</h1> :
                <h1>The number is {text}</h1>
            }
        </div>
    )
}
export default TextAndColors