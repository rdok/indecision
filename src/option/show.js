import React from "react"

import {DeleteOption} from "./delete"

export const ShowOption = ({option, handleDeleteOption}) => {
    return (
        <li>
            {option}
            <DeleteOption
                option={option}
                handleDeleteOption={handleDeleteOption}
            />
        </li>
    )
}
