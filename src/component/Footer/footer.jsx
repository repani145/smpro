import React from "react";
import "./footer.css";
import { data } from "../../Images/data";
const Footer = () => {
    return (
        <div className="footer" id="footer" style={{backgroundColor:"black",color:'white',paddingTop:'20px'}}>
            <div className="container">
                <div className="row footer_footer">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-left">
                        <img src={data.logo} alt="logo" className="img-fluid" style={{ width: "50px", height: "50px" }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo et corporis, nobis eligendi alias deserunt, dolore eveniet ullam, sapiente tempora consequuntur fuga corrupti atque provident pariatur? Quos consectetur at nobis.</p>
                        <div className="icons d-flex">
                            <img src={data.facebook_icon} alt="facebook" className="me-2" />
                            <img src={data.linkedin_icon} alt="linkedin" className="me-2" />
                            <img src={data.twitter_icon} alt="twitter" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-center mt-4 mt-md-0">
                        <h2>COMPANY</h2>
                        <ol className="list-unstyled">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ol>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 footer-right mt-4 mt-lg-0">
                        <h2>GET IN TOUCH</h2>
                        <ol className="list-unstyled">
                            <li>+1-23-456-7890</li>
                            <li>contact@delivery.com</li>
                        </ol>
                    </div>
                </div>
                <hr />
                <p className="text-center copyright">Copyright 2024 &copy; delivery.com - All Right Reserved.</p>
            </div>
        </div>
    );
};
export default Footer;
