import React from 'react';
import BackHistoryButton from "@/components/ui/buttons/back-history-button";

function BackButtonTitle({content}) {
    return (
        <section className="w-full flex py-3 flex-wrap items-center justify-between ">
            <div className="w-1/4 flex px-4 items-start justify-start">
                <BackHistoryButton/>
            </div>
            <div className="w-2/4 flex items-center justify-center font-medium">
                {content}
            </div>
            <div className="w-1/4"></div>
        </section>
    );
}

export default BackButtonTitle;