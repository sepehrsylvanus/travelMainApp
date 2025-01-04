import React from 'react';
import MainLayout from "@/components/layout/mainLayout";

function Layout({children}) {
    return (
        <MainLayout hasNavigation={false}>
            {children}
        </MainLayout>
    );
}

export default Layout;