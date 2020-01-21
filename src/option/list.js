import React from 'react'

import {ShowOption} from './show'

export const ListOptions = ({options, removeOptions, handleDeleteOption}) => {

    const items = options.map((option) => {
        return <ShowOption
            key={option}
            option={option}
            handleDeleteOption={handleDeleteOption}
        />
    })
    console.log('handleAddOption')

    return (
        <div>
            <h2>Options</h2>
            <p>{options.length > 0 || 'Add an option to get started!'}</p>
            <ol>{items}</ol>
            <button onClick={removeOptions}>Remove all</button>
        </div>
    )
}

