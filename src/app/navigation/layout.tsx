"use client";
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type TProps = {
    children?: ReactNode,
}

const layout = (props: TProps) => {
    const pathname = usePathname();
    return (
        <div>
            <Link
                href="/navigation"
                style={{
                    fontWeight: pathname.startsWith("/navigation") ? 500 : 300
                }}
            >
                Go to Navigation Home
            </Link>
            <Link
                href="/navigation/in"
                style={{
                    fontWeight: pathname.startsWith("/navigation/in") ? 500 : 300
                }}
            >
                Go to /navigation/in
            </Link>
            {
                props.children
            }
        </div>
    )
}

export default layout
