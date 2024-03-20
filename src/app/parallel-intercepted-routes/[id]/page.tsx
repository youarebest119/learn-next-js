"use client";
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { data } from '../data';

type TProps = {
    params: {
        id: string,
    }
}

type TItem = {
    id?: number;
    name?: string;
    age?: number;
}

const page = (props: TProps) => {
    const [item, setItem] = useState<TItem>({});
    useEffect(() => {
        setItem(data.find(item => {
            return item.id === Number(props.params.id)
        }) || {})
    }, [])
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.age}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default page
