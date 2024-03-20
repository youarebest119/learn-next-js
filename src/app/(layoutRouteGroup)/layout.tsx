import React, { ReactNode } from 'react'

type TProps = {
    children?: ReactNode,
}

const Layout = (props: TProps) => {
    return (
        <div>
            My Layout
            {props.children}
        </div>
    )
}

export default Layout
