import React from "react";
import NavigationBottom from "../ui/navigation/navigation-bottom";

function MainLayout({children, hasNavigation = true , locale = 'en'}) {
    return (
        <main
            className={`${hasNavigation && 'pb-[54px]' } relative flex items-start justify-start w-full h-screen md:w-[375px] bg-main-background-white`}>
            {children}
            {
                hasNavigation && <NavigationBottom locale={locale}/>
            }
        </main>
    );
}

export default MainLayout;
