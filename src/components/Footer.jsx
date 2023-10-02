import React from 'react'
import Logo from "../assets/Artboard – 1.png"
import "./footer.css"
const Footer = () => {
  return (
    <>
            <div className="footer">
                <div className="container footer-left">
                <img src={Logo} alt="" />
                <p>203, Abc road , xyz complex Chennai - 600 032, India</p>
                <p> <b>Phone </b>: +91 44 4269 2288</p>
                <p> <b>Email </b>: admin@parikshan.net.in</p>
                </div>
                <div className="container footer-right">
                        <div className="footer-links">
                            
                            <ul>
                                <h4>Useful Links</h4>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Training Registration</li>
                                <li>Home</li>
                                <li>Services</li>
                            </ul>

                            <ul>
                                <li>Support</li>
                                <li>Contact Us</li>
                            </ul>

                            <ul>
                                <h4>Site Map</h4>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Training Registration</li>
                                <li>Home</li>
                                <li>Services</li>
                                {/* <li>Training Registration</li> */}
                            </ul>


                        </div>

                        <div className="footer-bottom">
                            <p>Food Labs Inc. © Copyright 2022. All Rights Reserved.</p>
                        </div>
                </div>
            </div>
    </>
  )
}

export default Footer