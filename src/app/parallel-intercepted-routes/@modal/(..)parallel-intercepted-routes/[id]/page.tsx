"use client";
import { useEffect, useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { data } from '../../../data';
import { useRouter } from 'next/navigation';

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
const InterceptedParallelRoute = (props: TProps) => {
    const router = useRouter();
    const [item, setItem] = useState<TItem>({});
    useEffect(() => {
        setItem(data.find(item => {
            return item.id === Number(props.params.id)
        }) || {})
    }, [])
    return (
        <div>
            <Modal onHide={() => router.back()} show={true}>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.age}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default InterceptedParallelRoute
