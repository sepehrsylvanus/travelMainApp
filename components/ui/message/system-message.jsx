import React from 'react';

function SystemMessage({trans}) {
    return (
        <section className="w-full flex justify-between items-stretch">
            <div className="w-3/4 overflow-hidden">
                <div className='flex w-full gap-2'>
                    <figure
                        className='flex w-[50px] rounded-full h-[50px] items-center justify-center bg-sky-500'>
                    </figure>
                    <div className={"w-2/3 flex flex-wrap"}>
                        <div className="w-full font-bold">
                            {trans("System Messages")}
                        </div>
                        <div className="w-full text-gray-500 line-clamp-1  text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut feugiat
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex flex-wrap items-center justify-end">
                <div className="w-full text-gray-400 text-[10px] text-end">
                    20 {trans("hours ago")}
                </div>
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
            </div>
        </section>
    );
}

export default SystemMessage;