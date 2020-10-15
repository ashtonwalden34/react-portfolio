import React from 'react';
import './appCard.css';

function AppCard({ title, description, appLink, repository, technologies, screenshot }) {

    return(
        <div className="row cardBody">
            <div className="screenShotWrapper">
                <img src={screenshot} alt="project screenshot" className="screenshot"/>
            </div>
            <div className="projectContent">
                    <h3 className='projectTitle'>{title}</h3>
                    <p className='projectDescription'>{description}</p>
                <div className="project-btns">
                    <button type="button" className="projectBtn" onClick={() => (window.open(appLink, '_blank'))}>
                        View Deployed Application
                    </button>
                    <button type="button" className="projectBtn" onClick={() => (window.open(repository, '_blank'))}>
                        View GitHub Repository
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AppCard;