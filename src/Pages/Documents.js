import React  from "react";
import Resume from './assets/resume.pdf'
import Certificate from './assets/bootcampCert.pdf'
import "./style.css"


function Documents() {
    return (
        <div className='docsWrapper'>
            <embed src={Certificate} className="certificate"></embed>
            <br/>
            <embed src={Resume} className="resume"></embed>
            <h1>Test Text</h1>
        </div>
        
    )
}

export default Documents;