import React from 'react';

const SideBody = ({player}) => {
    // console.log(player);
    const { category, country, img, name, price, ratings } = player;
    
    return (
        <div className='bg-slate-200 rounded-lg p-6 sticky top-0'>
            <h1>Player Name : {}</h1>
            <h1>Player Category : {category}</h1>
            <h1>Price : {price}</h1>
        </div>
    );
};

export default SideBody;