import React from 'react';

export const Header = ({title, subtitle}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

// Header.defaultProps = {title: 'Alternative Title'}
