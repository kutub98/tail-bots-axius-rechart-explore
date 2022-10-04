import React from 'react';
import SinglePrice from '../singlePrice/SinglePrice';
import './Price.css'

const PriceOptions = () => {
    const priceOption = [
        {id: 1, name: 'Free', price: 0 ,  durations: 'month',
        features: [' features One', 'features two', 'features three']
    },
        {id: 2, name: 'Medium', price: 9.99 ,  durations: 'month',
        features: [' features One', 'features two', 'features three' , 'features four', 'features five']},
        {id: 3, name: 'Premium', price: 99.99 ,  durations: 'month',
        features: [' features One', 'features two', 'features three' , 'features four', 'features five','features six', 'features seven']}
       
    ]
    return (
        <div>
             <h1 className="text-6xl text-black">best deal option  evver</h1>
            <div className="priceOptionBox ">
            {
                priceOption.map(price => <SinglePrice key = {price.id} priceOption={price}> </SinglePrice>)
            }
            </div>
           
        </div>
    );
};

export default PriceOptions;