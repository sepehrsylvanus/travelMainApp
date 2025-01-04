import React from 'react';
import CloseButtonComponent from "@/components/ui/buttons/closeButtonComponent";

import SendButton from "@/components/ui/buttons/send-button";
import SettingButton from "@/components/ui/buttons/setting-button";


function CloseButtonSettingIcon({locale}) {
    return (
        <div className="w-full flex flex-wrap">
            <div className="w-1/2 flex items-center">
                <CloseButtonComponent/>
            </div>
            <div className="w-1/2 flex  justify-end gap-1">
                <SendButton/>
                <SettingButton locale={locale}/>
            </div>
        </div>
    );
}

export default CloseButtonSettingIcon;