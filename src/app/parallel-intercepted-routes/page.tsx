"use client";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { data } from './data'
import { useRouter } from 'next/navigation';

const ParallelInterceptedRoutes = () => {
    const router = useRouter();
    return (
        <div>
            <Container>
                <h1>Parallel Intercepted Routes</h1>
                <Row>
                    {
                        data.map(item => {
                            return (
                                <Col key={item.id} md={4}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{item.age}</Card.Subtitle>
                                            <Button onClick={() => router.push(`/parallel-intercepted-routes/${item.id}`)} variant="primary">View</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ParallelInterceptedRoutes
