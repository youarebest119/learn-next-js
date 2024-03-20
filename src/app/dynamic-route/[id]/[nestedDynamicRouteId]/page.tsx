import React from 'react'

type TProps = {
    params: {
        id: string,
        nestedDynamicRouteId: string,
    }
}

const page = (props: TProps) => {
    return (
        <div>
            <h2>
                Id - {props.params.id}
            </h2>
            <h2>
                Nested Dynamic ID - {props.params.nestedDynamicRouteId}
            </h2>
        </div>
    )
}

export default page
