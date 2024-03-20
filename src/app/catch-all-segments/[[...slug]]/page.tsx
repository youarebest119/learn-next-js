// [[]] double square parentheses means optional chaining

import React from 'react'

type TProps = {
    params: {
        slug: string[],
    }
}

const CatchAllSegments = (props: TProps) => {
    if (!props.params.slug) {
        return (
            <h1>Catch All Segments Homepage</h1>
        )
    }
    return (
        <div>
            <h1>
                Catch All Segments
            </h1>
            <h2>Slugs</h2>
            <ul>
                {
                    props.params.slug?.map((item, index) => {
                        return (
                            <li key={item + index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CatchAllSegments
