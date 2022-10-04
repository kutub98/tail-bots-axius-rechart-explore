import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Featurs = ({feature}) => {
    return (
        <div className="items-center flex ">
             <div>
             <CheckCircleIcon className=" h-6 w-6 text-blue-700"></CheckCircleIcon>
             </div>
             <div className="ml-6">
             <h1>{feature}</h1>
             </div>
        </div>
    );
};

export default Featurs;