import React from "react"

export const DeleteOption = ({option, handleDeleteOption}) => {
    const style = {
        background: 'none',
        border: 'none',
        padding: '0!important',
        textDecoration: 'underline',
        cursor: 'pointer',
    }

    return (
        <button
            style={style}
            onClick={() => handleDeleteOption(option)}
        >Delete</button>
    )
}
