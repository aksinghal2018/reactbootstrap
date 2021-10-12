import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import "../styles.css"
export class Deals extends Component {
    render() {
        return (
            <section className="deals mt-4">
                <Row className="text-left">
                    <Col lg="6" md="6" sm="6" >
                        <Image src="../Images/tshirt.JPG" className="w-100 h-100" fluid />
                    </Col>
                    <Col lg="6" md="6" sm="6">
                        <h6>HOT DEALS</h6>
                        <Row>
                            <span className="dot mr-2 ml-3"></span>
                            <span className="dot mr-2 bg-danger"></span>
                            <span className="dot bg-warning"></span>
                        </Row>
                        <h1 className="mt-5" style={{fontFamily: "'Times New Roman', serif"}}>Tshirts</h1>
                        <div className="d-flex  ml-2">
                            <span className="fa fa-star checked fa-sm"></span>
                            <span className="fa fa-star checked fa-sm"></span>
                            <span className="fa fa-star checked fa-sm"></span>
                            <span className="fa fa-star checked fa-sm"></span>
                            <span className="fa fa-star checked fa-sm"></span>
                            <h6 style={{fontFamily :"'Times New Roman', serif", fontStyle: "italic; color: lightgrey"}}>(05 Reviews)</h6>
                        </div>
                        <h1 className="text-danger mt-4">$230.00</h1>
                        <p className="text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi perferendis quidem, vel, velit temporibus unde
                            quisquam ad fuga repudiandae rerum iusto ratione laborum aspernatur hic aliquid labore cum obcaecati.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum magni, aut necessitatibus maxime voluptatibus atque amet
                            ab quam corrupti possimus est hic modi illo ea, cupiditate omnis earum obcaecati tenetur.
                        </p>
                        <ul>
                            <li className="d-flex" >
                                <span className="doticon mr-2  bg-dark "></span>
                                <h4>Color</h4>
                                <div className="row">
                                    <span className="dot mr-2 "></span>
                                    <span className="dot mr-2 bg-danger"></span>
                                    <span className="dot bg-warning"></span>
                                </div>
                            </li>
                            <li className="d-flex" >
                                <span className="doticon mr-2 bg-dark "></span>
                                <h4>SIZE</h4>
                                <div className="row ml-4">
                                    <h6 className=" border text-center" style={{width: "50px",marginLeft:"100px",marginTop:"4px"}}>S</h6>
                                    <h6 className="m-1 border text-center" style={{width: "50px"}}>M</h6>
                                    <h6 className="m-1 border text-center" style={{width: "50px"}}>XL</h6>
                                    <h6 className="m-1 border text-center" style={{width: "50px"}}>XXL</h6>
                                </div>
                            </li>
                        </ul>
                        <div className="timer d-flex ">
                            <div className="m-1 border text-center" style={{width: "70px",height: "70px" ,backgroundColor: "skyblue"}}><h4>25</h4><p style={{fontSize:"14px"}}>Days</p></div>
                            <div className="m-1 border text-center" style={{width: "70px",height: "70px" ,backgroundColor: "skyblue"}}><h4>14</h4><p style={{fontSize:"14px"}}>Hours</p></div>
                            <div className="m-1 border text-center" style={{width: "70px",height: "70px" ,backgroundColor: "skyblue"}}><h4>57</h4><p style={{fontSize:"14px"}}>Minutes</p></div>
                            <div className="m-1 border text-center" style={{width: "70px",height: "70px" ,backgroundColor: "skyblue"}}><h4>43</h4><p style={{fontSize:"14px"}}>Secs</p></div>
                        </div>
                    </Col>
                </Row>


            </section>
        )
    }
}

export default Deals
