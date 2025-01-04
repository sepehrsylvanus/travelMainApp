import React from 'react';

function InputLabel({label , placeholder}) {
    return (
        <>
            <h4 className='w-full flex text-lg font-bold py-2'>{label}</h4>
            <input type="text" placeholder={placeholder}
                   className="placeholder:text-gray-400 font-light p-3 w-full bg-transparent rounded-2xl border focus:outline-0 placeholder:text-sm"
                   name="" id=""/>
        </>
    );
}

export default InputLabel;