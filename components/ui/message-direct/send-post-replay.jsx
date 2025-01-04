import React from 'react';

function SendPostReplay({trans}) {
    return (
        <div className='w-full flex h-[110px] content-center flex-wrap justify-center'>
            <div className="w-full py-2 flex flex-wrap text-gray-400 text-[12px] items-center justify-center">
                {trans("Maximum limit 10 message per each person")}
            </div>
            <div className="w-full flex flex-wrap px-8 p-2">
                <input type="text"
                       className="outline-0 flex border-none h-[48px] bg-white rounded-xl px-3 shadow-sm w-full placeholder:text-sm "
                       placeholder={trans("Post a Replay")} name="" id=""/>
            </div>
        </div>
    );
}

export default SendPostReplay;