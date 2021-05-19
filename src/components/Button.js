import React from 'react'

const Button = ({ symbol, color, handleClick, isClear }) => {

    return (
        <div className="btn"
            style={{ backgroundColor: isClear ? "#ff7f50" : color, borderRadius: isClear ? "16px" : '' }}
            onClick={() => handleClick(symbol)}>{symbol === "*" ? "x" : symbol}</div>
    )
}

export default Button
