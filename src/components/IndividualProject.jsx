import React from 'react';

function IndividualProject(props) {
    function handleProjectClick() {
        window.open(props.web_url, '_blank');
    }

    return (
        <div className="ind-project-container">

            <div className="proj-content">
                <h1>{props.title}</h1>
                <h3>{props.about}</h3>
                <img className="project-photo hvr-float" onClick={handleProjectClick} src={process.env.PUBLIC_URL + props.img_url} alt="Note-App" />
                <h3>Developed with:</h3>
                <ul className="tech-list-container">
                    {props.technologies.map((tech, index) => {
                        return (
                            <li key={index} className="tech-list">{tech}</li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default IndividualProject;