import React from 'react';
import AppCard from '../AppCard/appCard.js'
import WebAppData from '../../utils/webApps.js';
import './ProjectsContainer.css'

function projectsContainer() {
    const webApps = WebAppData

    return(
        <div>
            <h2 className='header'>Check out some apps I've built</h2>
            <div className="appCards">
                {webApps.map(webApp => (
                    <AppCard
                        key={webApp.id}
                        title={webApp.title}
                        description={webApp.description}
                        appLink={webApp.appLink}
                        repository={webApp.repository}
                        technologiesUsed={webApp.technologies}
                        screenshot={webApp.screenshot}
                    />
                ))}
            </div>
        </div>
    )
}

export default projectsContainer;