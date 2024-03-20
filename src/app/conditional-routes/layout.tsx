"use client";
import React, { ReactNode, useState } from 'react'


type TProps = {
    children: ReactNode,
    login: ReactNode,
    dashboard: ReactNode,
}

const ConditionalRoutesLayout = (props: TProps) => {
    const [isLogin, setIsLogin] = useState(false);
    return isLogin ? (
        <div>
            <button onClick={() => setIsLogin(false)}>Logout</button>
            {props.children}
            {props.dashboard}
        </div>
    )
        :
        <>
            <button onClick={() => setIsLogin(true)}>Login</button>
            {props.login}
        </>
}

export default ConditionalRoutesLayout
