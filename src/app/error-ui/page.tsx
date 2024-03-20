import React from 'react'

const getRandomNumber = (count: number) => {
    return Math.floor(Math.random() * count);
}

const ErrorUi = () => {
    const num = getRandomNumber(2);
    if (num === 1) {
        throw new Error("error loading review")
    }
    return (
        <div>
            Error Ui
        </div>
    )
}

export default ErrorUi
