import React, { Component } from 'react'
import { Image, Row, Col, Card } from 'react-bootstrap'
const image = ["insta1.JPG", "insta2.JPG", "insta3.JPG", "insta4.JPG", "insta5.JPG", "insta6.JPG"]
export class Sociamedai extends Component {
    render() {
        return (
            <section className="socialmedia text-center mb-4 mt-4">
                <h4>INSTAGRAM</h4>
                <Image src="images/design.JPG" />
                <Row className=" mt-4">
                    {
                        image.map((item) => {
                            return (

                                <Col lg="2" md="2" sm="2" className="m-auto">
                                    <Image className="  w-100 h-100" src={`images/${item}`} alt="insta" />
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row className=" mt-4">
                    <Col lg="4" md="4" sm="4" className=" m-auto">
                        <Card className=" text-center ">
                            <h4>BEST SELLER</h4>
                            <Card.Body>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t1.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Leatt Pro Jacket</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$99.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t2.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Original Archilles Mid</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$260.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t3.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Vinperl Handbag</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$220.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="4" sm="4" className=" m-auto">
                        <Card className=" text-center ">
                            <h4>TOP RATE</h4>
                            <Card.Body>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t4.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Seafarer Button Up</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$335.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t5.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Pointed Toe Flat</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$287.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t6.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Leatt Pro Jacket</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$99.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="4" sm="4" className=" m-auto">
                        <Card className=" text-center ">
                            <h4>TOP SPECIAL</h4>
                            <Card.Body>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t7.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Klim Dakar Jacket</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$99.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t8.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Klim Inversion Jacket</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$260.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" sm="6">
                                        <Image className="itemImage" src="images/t9.JPG" alt="products" />
                                    </Col>
                                    <Col lg="6" md="6" sm="6" className="m-auto text-left">
                                        <h6 className="mt-0" style={{ fontFamily: "'Times New Roman', serif" }}>Leatt Pro Jacket</h6>
                                        <div className="d-flex" style={{ marginLeft: "53px" }}>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>
                                            <span className="fa fa-star checked fa-sm" style={{ fontSize: "8px" }}></span>                                    </div>
                                        <h6 className="text-danger mt-2">$220.00</h6>
                                        <div className=" d-flex mt-4">
                                            <div className="m-1 border text-center" style={{ width: "70px", backgroundColor: "skyblue" }}><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-retweet fa-rotate-90"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-heart"></i></div>
                                            <div className="m-1 border text-center" style={{ width: "70px" }}><i className="fas fa-eye"></i></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default Sociamedai
