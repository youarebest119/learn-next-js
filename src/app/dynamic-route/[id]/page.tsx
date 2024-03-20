import React from 'react'

type TProps = {
    params: {
        id: string,
    }
}

const DynamicRouteId = ({ params }: TProps) => {
    return (
        <div>
            <h1>
                {params.id}
            </h1>
        </div>
    )
}

export default DynamicRouteId
