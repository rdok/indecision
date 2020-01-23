import React from "react"

import {DeleteOption} from "./delete"

export const ShowOption = ({option, handleDeleteOption}) => (
    <li className='option'>
        <p className='option__text'> {option} </p>
        <DeleteOption
            option={option}
            handleDeleteOption={handleDeleteOption}
        />
    </li>
)
