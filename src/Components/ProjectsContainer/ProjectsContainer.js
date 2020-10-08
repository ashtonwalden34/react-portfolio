import React from 'react';
import AppCard from '../AppCard/appCard'
import WebAppData from '../../utils/webApps.js';

function projectsContainer() {
    const webApps = WebAppData

    return(
        <div>
            <h2>Check out some apps I've built</h2>
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