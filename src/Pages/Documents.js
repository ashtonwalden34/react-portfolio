import React  from "react";
import Resume from './assets/resume.pdf'
import Certificate from './assets/bootcampCert.pdf'
import "./style.css"


function Documents() {
    return (
        <div className="row">
           <div className="docWrapper">
                <a href={Resume} target="_blank" rel="noopener noreferrer" className="docLink">
                    Resumé
                </a>
            </div>
            <div className="docWrapper">
                <a href={Certificate} target="_blank" rel="noopener noreferrer" className="docLink">
                    University of Utah Coding Bootcamp Certificate
                </a>
            </div>
        </div>
    )
}

export default Documents;

{/* <Link to="/portfolio/webdev"><img src={require('../assets/Web.png')} className="portfolioImg" alt="Coding pic"/></Link> */}