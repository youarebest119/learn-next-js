import { notFound } from 'next/navigation'
import React from 'react'

const ConditionalNotFound = () => {
    return notFound();
    return (
        <div>
            Conditional Not Found
        </div>
    )
}

export default ConditionalNotFound
