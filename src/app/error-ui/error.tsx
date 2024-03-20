"use client";
type TProps = {
    error: Error,
    reset: () => void,
}

const ErrorBoundary = (props: TProps) => {
    return (
        <div>
            <button onClick={props.reset}>Retry</button>
            <h1>
                {
                    props.error.message
                }
            </h1>
        </div>
    )
}

export default ErrorBoundary
