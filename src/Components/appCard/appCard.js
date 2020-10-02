import React from 'react';
import './style.css';

function AppCard({ title, description, appLink, repository, technologies, screenshot }) {

    return(
        <div className="row cardBody">
            <div className="col col-lg-4">
                <img src={screenshot} alt="project screenshot" className="screenshot"/>
            </div>
            <div className="col col-lg-8 projectContent">
                    <h3>{title}</h3>
                    <p>{description}</p>
                <div className="project-btns">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => (window.open(appLink, '_blank'))}>
                        View Deployed Application
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => (window.open(repository, '_blank'))}>
                        View GitHub Repository
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AppCard;