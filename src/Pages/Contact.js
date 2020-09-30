import React from "react";
import { SocialIcon } from "react-social-icons";
import "./style.css"

const Contact = () => (
    <div>
        <h1>CONTACT</h1>
        <div>
            <p>Visit my GitHub, LinkedIn or feel free to send an email</p>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" id="solcialIcon">
                    <SocialIcon url="https://www.linkedin.com/in/ashton-walden-81172619b/" target="_blank" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" id="solcialIcon">
                    <SocialIcon url="https://github.com/ashtonwalden34" target="_blank" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" id="solcialIcon">
                    <SocialIcon url="mailto:ashtonwalden34@gmail.com" target="_blank" />
                </div>
            </div>
        </div>
    </div>
);

export default Contact;