import React, { Component } from 'react'
import { Button, Carousel,Row,Col } from 'react-bootstrap'
export class Crousel extends Component {
    render() {
        return (
            <>
                <Carousel  className="mt-4">
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../Images/cr.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="mb-2">The World OF Extreme Sports</h1>
                            <h4 className="">SAVE 20% ON ALL APPAREL</h4>
                            <hr className="bg-dark w-50" style={{ marginLeft: "30%" }} />
                            <hr className="bg-dark w-25" style={{ marginLeft: "35%" }} />
                            <button type="button" className="btn btn-dark ">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="../Images/cr1.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1 className="mb-2">The World OF Extreme Sports</h1>
                            <h4 className="">SAVE 20% ON ALL APPAREL</h4>
                            <hr className="bg-dark w-50" style={{ marginLeft: "30%" }} />
                            <hr className="bg-dark w-25" style={{ marginLeft: "35%" }} />
                            <button type="button" className="btn btn-dark ">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../Images/cr4.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className="mb-2">The World OF Extreme Sports</h1>
                            <h4 className="">SAVE 20% ON ALL APPAREL</h4>
                            <hr className="bg-dark w-50" style={{ marginLeft: "30%" }} />
                            <hr className="bg-dark w-25" style={{ marginLeft: "35%" }} />
                            <button type="button" className="btn btn-dark ">Shop now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section className="promo mt-2">
                    <Row className="justify-content-center">
                        <Col xs lg="4" md="4" sm="6">
                            <Button variant="primary" size="lg"><i className="fa fa-plane mr-2" aria-hidden="true"></i>
                                FREE SHIPPING WORLDWIDE</Button>
                        </Col>
                        <Col xs lg="4" md="4" sm="6">
                            <Button variant="danger" size="lg"><i className="fas fa-sync mr-2"></i>100% MONEY BACK - 48 HOURS</Button>
                        </Col>
                        <Col xs lg="4" md="4" sm="6">
                            <Button variant="warning" size="lg"><i className="fas fa-clock mr-2"></i>24/7 ONLINECUSTOMERSUPPORT</Button>
                        </Col>
                        
                    </Row>
                   
                </section>




                
            </>
        )
    }
}

export default Crousel
