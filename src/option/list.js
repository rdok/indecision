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

    return (
        <div>
            <div className='widget-header'>
                <h2 className='widget-header__title'>Your options</h2>
                <button
                    className='button button--link'
                    onClick={removeOptions}
                >
                    Remove all
                </button>
            </div>
            <ol>{items}</ol>
            {
                options.length > 0 || <p className="widget__message">
                    Add an option to get started!
                </p>
            }
        </div>
    )
}

