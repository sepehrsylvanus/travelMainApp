"use client"
import BackHistoryButton from "@/components/ui/buttons/back-history-button";

function PageTitleBackButton({content}) {
    return (
        <div className="w-full flex flex-wrap pt-5 items-center justify-between">

            <div className="w-1/4 flex items-center justify-center">
              <BackHistoryButton/>
            </div>
            <div className="w-2/4 flex justify-center items-center text-lg">{content}</div>
            <div className="w-1/4"></div>
        </div>
    );
}

export default PageTitleBackButton;