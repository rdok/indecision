import React from 'react';

export const Header = ({title, subtitle}) => (
    <div className="header">
        <h1 className="header__title">{title}</h1>
        <h2 className="header_subtitle">{subtitle}</h2>
    </div>
)
