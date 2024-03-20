"use client";
// both layout and template can be used at same time 
// hirarchy will be -> layout -> template -> page
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

type TProps = {
    children?: ReactNode,
}
const template = (props: TProps) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("template runs every time route changes");
        console.log("and state resets also");
    }, [])
    return (
        <div>
            <Button onClick={() => setCount(count => count + 1)}>Increment {count}</Button>
            <ul>
                <li>
                    <Link
                        href="/templating/templating-route-one"
                    >
                        One
                    </Link>
                </li>
                <li>
                    <Link
                        href="/templating/templating-route-two"
                    >
                        Two
                    </Link>
                </li>
            </ul>
            {
                props.children
            }
        </div>
    )
}

export default template
