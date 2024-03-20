import Link from 'next/link'
import React from 'react'

const InterceptedRout = () => {
    return (
        <div>
            Intercepted Route Homepage
            <Link
                href="/intercepted-routes/one"
            >
                Go To Page
            </Link>
        </div>
    )
}

export default InterceptedRout
