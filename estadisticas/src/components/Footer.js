import React from "react";
import { Row, Col} from "react-bootstrap";










export default function Footer(){
    return(
        <>
            <div className="footer">
                <Row className="pt-3">
                    <Col md={12} lg={4} className= "footerleft text-center">
                        <img alt="Logo" className="img-footer mt-4" width={200} height={200} src="https://www.urbe.edu/images/logo-urbe.gif"></img>
                    </Col>

                    <Col md={12} lg={4} className= "footermid">
                        <h3>Contact Info</h3>
                        <hr></hr>

                        <p>Email:
                        </p>
                        <span>infourbe@edu.ve</span>
                    </Col>

                    <Col md={12} lg={4} className= "footerright">
                        <h3> Follow Us</h3>
                        <hr></hr>
                        

                        <a href="https://es-la.facebook.com/infourbe/"><img width={50} height={50} className='img-social' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook Logo"/></a>
                        <a href="https://www.instagram.com/infourbe/?hl=es"><img width={50} height={50} className='img-social' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram Logo"></img></a>
                        <a href="https://twitter.com/infourbe?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img width={50} height={50} className='img-social' src="https://www.droid-life.com/wp-content/uploads/2022/10/Twitter-1200x1200-cropped.jpg" alt="Instagram Logo"></img></a>
                    </Col>
                </Row>

                <div className="copyright text-center">
                    <hr></hr>
                    <p>
                        Copyright © 2022
                        <br/>
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    )
}