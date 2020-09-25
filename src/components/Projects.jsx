import React from 'react';
import IndividualProject from './IndividualProject'
import { limbitless,  note_keeper, retrohub} from '../constants/Projects'

function Projects(props) {
  return (
    <div className="section-content" id={props.id}>
      <div>
        <h1 className="project-header">en.projects</h1>

        <div className="projects-container">

          <div className="item">
            <IndividualProject 
                  title={retrohub.title}
                  about={retrohub.about}
                  img_url={retrohub.img_url}
                  web_url={retrohub.web_url}
                  technologies={retrohub.technologies}/>
          </div>

          <div className="item" style={{backgroundColor: "#96bb7c"}}>
            <IndividualProject 
              title={note_keeper.title}
              about={note_keeper.about}
              img_url={note_keeper.img_url}
              web_url={note_keeper.web_url}
              technologies={note_keeper.technologies}/>
          </div>

          <div className="item" style={{backgroundColor: "#D21D3C"}}>
            <IndividualProject 
              title={limbitless.title}
              about={limbitless.about}
              img_url={limbitless.img_url}
              web_url={limbitless.web_url}
              technologies={limbitless.technologies}/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Projects;