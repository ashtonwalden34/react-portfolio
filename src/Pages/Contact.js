import React from "react";
import { SocialIcon } from "react-social-icons";
import "./style.css"

const Contact = () => (
    <div className="contactPageWrapper">
        <h1 className='contactHeader'>CONTACT</h1>
        <div className="contactContentWrapper">
            <p className='contactText'>Visit my GitHub, LinkedIn or feel free to send an email</p>
            <div className="socialIconWrapper">
                <div className="socialIcon" id="socialIcon">
                    <SocialIcon url="https://www.linkedin.com/in/ashton-walden-81172619b/" target="_blank" />
                </div>
                <div className="socialIcon" id="socialIcon">
                    <SocialIcon url="https://github.com/ashtonwalden34" target="_blank" />
                </div>
                <div className="socialIcon" id="socialIcon">
                    <SocialIcon url="mailto:ashtonwalden34@gmail.com" target="_blank" />
                </div>
            </div>
        </div>
    </div>
);

export default Contact;