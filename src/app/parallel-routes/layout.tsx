import { ReactNode } from 'react'

type TProps = {
    children?: ReactNode,
    users: ReactNode,
    revenue: ReactNode,
    notifications: ReactNode,
}
const layout = (props: TProps) => {
    return (
        <div>
            {/* props.children refrences to /@children/page.tsx */}
            {props.children}
            {/* <Notifications />
            <Users />
            <Revenue /> */}
            {props.notifications}
            {props.users}
            {props.revenue}
        </div>
    )
}

export default layout
