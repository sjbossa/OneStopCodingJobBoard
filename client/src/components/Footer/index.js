import React from 'react';
import './footer.css';
import fb from '../Footer/images/fbimg.png';
import twitter from '../Footer/images/twitterimg.png';
import linkedin from '../Footer/images/linkedinimg.png';
import github from '../Footer/images/githubimg.png';


const Footer=()=>{
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource Center</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/contact">
                        <p>Contact</p>
                        </a>                                      
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="facebook"/></p>
                            <p><img src={twitter} alt="twitter"/></p>
                            <p><img src={linkedin} alt="linkedin"/></p>
                            <p><img src={github} alt="github"/></p>
                        </div>
                    </div>
                </div>

                
            <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} One Stop Coding JobBoard. All rights reserved
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/terms"><div><p>Terms and Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Footer;