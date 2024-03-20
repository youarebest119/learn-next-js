import React from 'react'
import Link from 'next/link'

const Notifications = () => {
    return (
        <div>
            <h1>
                Notifications
            </h1>
            <Link
                href="/parallel-routes/archived"
            >
                Archived
            </Link>
        </div>
    )
}

export default Notifications
