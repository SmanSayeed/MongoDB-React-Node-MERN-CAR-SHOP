import React from 'react';

const Star = (props) => {
    const fill = props.value;
   
    return (
        <>
            {
                fill === 'fill' ? (<><i className='fas fa-star'></i></>)
                    : (
                    <><i className='far fa-star'></i></>
                ) 
            
            }
        </>
    );
};

export default Star;