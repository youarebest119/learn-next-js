import { ReactNode } from 'react'

type TProps = {
    modal: ReactNode,
    children: ReactNode,
}

const layout = (props: TProps) => {
    return (
        <>
            {props.modal}
            {props.children}
        </>
    )
}

export default layout
