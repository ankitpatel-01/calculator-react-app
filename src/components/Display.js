import React from 'react'

const Display = ({ result, text }) => {
    return (
        <div className="display">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default Display
