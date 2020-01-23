import React from "react"

export const DeleteOption = ({option, handleDeleteOption}) => (
    <button
        onClick={() => handleDeleteOption(option)}
        className='button--link'
    >Remove</button>
)
