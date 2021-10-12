import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
export class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small" style={{backgroundImage: "url('../images/footer1.JPG')",
            backgroundSize: "100% 100%",
            width: "100%",
            height:"650px",
            padding:"20px"}}>
            <div class="container text-center  text-white">
              <Image class=" footerImage mt-4" src="images/footer.png" alt="footerImage" roundedCircle/>
              <div class="d-flex justify-content-center mt-2">
              <div class="container w-75 text-center">
                  <p><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt deleniti esse ut corrupti facilis tempore suscipit ratione harum consequuntur quos, illo blanditiis dolore necessitatibus
                       voluptate quaerat at numquam pariatur?</q></p>
              </div>
              </div>
              <h4 class="ml-4">BILLY GRAHAM</h4>
              <h6><i>Web Designer</i></h6>
              <div class="d-flex justify-content-center ">
                  <div class="row">
                      <span class="footercircle  "></span>
                      <div class="footercircle mr-2 ">
                          <div class="footercircle1 "></div>
                          </div>
                      <span class="footercircle "></span>
                  </div>
              </div>
            </div>
            <div class=" mt-4 ">
                <div class="d-flex text-center ">
                  <div style={{width: "20%", height: "50px", backgroundColor: "blue"}}>
                      <Image src="images/facebook.png" alt="facebookicon" style={{width:"16px", height: "16px", borderRadius: "50%"}} />
                      <a class="text-white" href="#" style={{textDecoration: "none"}}>FACEBOOK</a>
                    </div>
                    <div style={{width: "20%", height: "50px", backgroundColor: "blue"}}>
                      <Image src="images/twitter.png" alt="twittericon" style={{width:"16px", height: "16px", borderRadius: "50%"}}/>
                      <a class="text-white" href="#" style={{textDecoration: "none"}}>TWITTER</a>
                    </div>
                    <div style={{width: "20%", height: "50px", backgroundColor: "#e227e2"}}>
                      <Image src="images/instagram.jpg" alt="instagramicon" style={{width:"16px", height: "16px", borderRadius: "50%"}} />
                      <a class="text-white" href="#" style={{textDecoration: "none"}}>INSTAGRAM</a>
                    </div>
                    <div style={{width: "20%", height: "50px", backgroundColor: "#b33f66"}}>
                      <Image src="images/dribble.JPG" alt="dribbleicon" style={{width:"16px", height: "16px", borderRadius: "50%"}}/>
                      <a class="text-white" href="#" style={{textDecoration: "none"}}>DRIBBLE</a>
                    </div>
                    <div style={{width: "20%", height: "50px", backgroundColor: "red"}}>
                      <Image src="images/pintrest.png" alt="pintresticon" style={{width:"16px", height: "16px", borderRadius: "50%"}}/>
                      <a class="text-white" href="#" style={{textDecoration: "none"}}>PINTREST</a>
                    </div>
                 </div>
                 </div>
                 <div class="text-center">
                     <Image src="images/logo.png" alt="logo" style={{width: "170px", height: "40px", marginTop: "25px"}} />
                 </div>
                 <div class="container text-center text-white mt-4">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore qui doloremque laborum quos quo asperiores beatae exercitationem,
                       aliquam ipsam sapiente rerum fugiat delectus quia dolore architecto eligendi! In, architecto suscipit.</p>
                 </div>
        </footer>
        )
    }
}

export default Footer
