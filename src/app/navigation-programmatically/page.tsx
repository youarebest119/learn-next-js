"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const NavigationProgrammatically = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/navigation/in");
        // router.back();
        // router.forward();
    }
    return (
        <div>
            <button onClick={handleClick}>
                Navigate
            </button>
        </div>
    )
}

export default NavigationProgrammatically
