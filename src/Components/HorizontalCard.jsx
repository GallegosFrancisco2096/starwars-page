import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const HCard = (props) => {
    return <>
        <Container fluid >
            <div className="HCard">
                <Row>
                    <Col xs={6}><h3>{props.title}</h3></Col>
                    <Col xs={{ span: 2, offset: 4 }}></Col>
                </Row>
                <br />
                <Row>
                    <Col xs={8}>
                        <div>
                            <p>
                                Lugar {props.address}
                            </p>
                            <p>
                                Fecha y Hora {props.date}
                            </p>
                            <p>
                                Descripción {props.body}
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
};
export default HCard;
