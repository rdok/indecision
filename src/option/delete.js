import React from "react"

const style = {
    background: 'none',
    border: 'none',
    padding: '0!important',
    textDecoration: 'underline',
    cursor: 'pointer',
}

export const DeleteOption = ({option, handleDeleteOption}) => (
    <button
        style={style}
        onClick={() => handleDeleteOption(option)}
    >Delete</button>
)
