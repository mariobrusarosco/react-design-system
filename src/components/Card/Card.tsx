import React from 'react';

const Card: React.FunctionComponent = ({ children }) => {
    return ( 
        <div style={{ backgroundColor: 'tomato' }}>
            {children}
        </div>
    )
}

export default Card