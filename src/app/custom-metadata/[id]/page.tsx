import React from 'react'
import { Metadata } from "next";


type TProps = {
    params: {
        id: string,
    }
}

//can be async function
export const generateMetadata = ({ params }: TProps): Metadata => {
    return {
        title: `${params.id} Id based metadata`
    }
}

const CustomMetadata = (props: TProps) => {
    return (
        <div>
            Custom Metadata based on {props.params.id}
        </div>
    )
}

export default CustomMetadata
