import React from 'react';
import BackHistoryButton from "@/components/ui/buttons/back-history-button";

function TabsCloseButtons({state, setState}) {
    return (<div className="w-full flex py-3 flex-wrap items-center justify-between ">
            <div className="w-1/4 flex px-4 items-start justify-start">
              <BackHistoryButton/>
            </div>
            <div className="w-2/4 flex items-center justify-center font-medium gap-2">
                <button onClick={() => setState("interest")}
                        className={`duration-100 ${state === "interest" && "text-blue-500"}`}>
                    Interests
                </button>
                <button onClick={() => setState("countries")}
                        className={`duration-100 ${state === "countries" && "text-blue-500"}`}>
                    Countries
                </button>
            </div>
            <div className="w-1/4"></div>
        </div>);
}

export default TabsCloseButtons;