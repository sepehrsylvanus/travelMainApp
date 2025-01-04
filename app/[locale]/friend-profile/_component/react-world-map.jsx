"use client"
import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const MapComponent = () => {
    const onRegionClick = (event, code) => {
        alert(`Clicked region: ${code}`);
    };

    return (
        <VectorMap
            map={worldMill}
            backgroundColor="#EDEDED"
            onRegionClick={onRegionClick}
            style={{
                width: '100%',
                height: '400px',
                borderRadius: '50%',
            }}
            series={{
                regions: [{
                    values: {
                        US: 100,
                        CA: 50,
                        FR: 75,
                        DE: 80,
                        // می‌توانید مقادیر بیشتری برای کشورهای دیگر اضافه کنید
                    },
                    scale: ['#C8EEFF', '#0071A4'],
                }],
            }}
        />
    );
};

export default MapComponent;
