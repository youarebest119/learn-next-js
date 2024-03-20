import React, { ReactNode } from 'react'

type TProps = {
    children: ReactNode,
};
const getRandomNumber = (count: number) => {
    return Math.floor(Math.random() * count);
}

const layout = (props: TProps) => {
    const num = getRandomNumber(2);
    if (num === 1) {
        throw new Error("error for layout error")
    }
    return (
        <div>
            Layout Error Layout
            {
                props.children
            }
        </div>
    )
}

export default layout
