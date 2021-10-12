import React, { Component } from 'react'
import { Image, Breadcrumb,Row,Col,Card } from 'react-bootstrap'
const images = ["item1.JPG", "item2.JPG", "item3.JPG", "item4.JPG", "item5.JPG", "item6.JPG", "item7.JPG", "item8.JPG", "item9.JPG", "item10.JPG", "item11.JPG", "item12.JPG"]
export class Features extends Component {
    render() {
        var i = 0;
        return (
            <section className="features text-center clr">
                <h4>FEATURED COLLECTIONS</h4>
                <Image src="../images/design.JPG" alt="design"></Image>
                <div className="d-flex justify-content-center">
                    <div className="featuremenu">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">NEW ARRIVALS</Breadcrumb.Item>
                            <Breadcrumb.Item >CLOTHING</Breadcrumb.Item>
                            <Breadcrumb.Item >HATS</Breadcrumb.Item>
                            <Breadcrumb.Item >SHOES</Breadcrumb.Item>
                            <Breadcrumb.Item >BAGS</Breadcrumb.Item>
                            <Breadcrumb.Item >ACCESSOIES</Breadcrumb.Item>
                        </Breadcrumb>
                        </div></div>
                        <Row>
                            {
                                images.map((item) => {
                                    return (<Col lg="2" md="2" className="d-flex m-auto">
                                        <Card>
                                            <Card.Img variant="top" src={`../images/${item}`} />
                                            <Card.Text>
                                                <h6>Leatt Pro Jacket</h6>
                                                <p className="text-danger">$550.00</p>
                                            </Card.Text>
                                        </Card>

                                    </Col>)
                                })
                            }
                        </Row>
                    
            </section>
        )
    }
}

export default Features
