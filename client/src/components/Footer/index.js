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
                            <p>
                                <a href="https://www.facebook.com">
                                    <img src={fb} alt="facebook"/>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.twitter.com">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com">
                                    <img src={linkedin} alt="linkedin"/>
                                </a>
                            </p>
                            <p>
                                <a href="https://www.github.com">
                                    <img src={github} alt="github"/>
                                </a>
                            </p>
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
                    <a href="https://www.termsfeed.com/live/baa7fdbd-5321-4435-b483-4b7aec33af06"><div><p>Terms and Conditions</p></div></a>
                    <a href="https://www.termsfeed.com/live/81d03c60-9ffd-45f5-b131-6317a14ca81e"><div><p>Privacy</p></div></a>
                    <a href="https://www.termsfeed.com/live/124b8460-cd11-4c75-ab7d-83419159f998"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Footer;