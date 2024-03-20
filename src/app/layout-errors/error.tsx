"use client";
// have to create one level above
type TProps = {
    error: Error,
    reset: () => void,
}

const error = (props: TProps) => {
    return (
        <div>
            <h1>{props.error.message}</h1>
        </div>
    )
}

export default error
