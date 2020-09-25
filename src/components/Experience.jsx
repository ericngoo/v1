import React, { useState } from 'react';
import WorkItem from './WorkItem';
import {project_limbitless, cse_tutor, EWB} from '../constants/Experience'

function Experience(props) {
  const [limbState, setLimbState] = useState(true)
  const [tutorState, setTutorState] = useState(false)
  const [ewbState, setEwbState] = useState(false)

  function limbClick() {
    setLimbState(true)
    setTutorState(false)
    setEwbState(false)
  }

  function tutorClick() {
    setTutorState(true)
    setLimbState(false)
    setEwbState(false)
  }

  function ewbClick() {
    setTutorState(false)
    setLimbState(false)
    setEwbState(true)
  }

  return (
    <div className="section-content" id={props.id}>


        <div className="exp-flex">

          <div className="flex-nav">
            <div className="experience-nav">
              <h1 style={{ color: '#d9515d', margin: '0'}}>en.experience <span style={{ color: '#d9515d', margin: '0'}}>[</span> </h1>
              

              <div className="inside-exp-container">
                <p
                  style={limbState ? { color: "#d9515d" } : null}
                  onClick={limbClick}>
                  Project Lim[b]itless,
                </p>

                <p
                  style={tutorState ? { color: "#d9515d" } : null}
                  onClick={tutorClick}>
                  UCSD CSE  Department Tutor,
                </p>

                <p
                  style={ewbState ? { color: "#d9515d" } : null}
                  onClick={ewbClick}>
                  Engineers Without Borders
                </p>

              </div>

              <h1 style={{ color: '#d9515d', margin: '0' }}>]</h1>
            </div>
          </div>

          <div className="flex-display">
            <div className="experience">
              {limbState ? 
                <WorkItem 
                  _id={project_limbitless._id}
                  title={project_limbitless.title}
                  position={project_limbitless.position}
                  startDate={project_limbitless.startDate}
                  endDate={project_limbitless.endDate}
                  desc={project_limbitless.desc} 
                  url={project_limbitless.url}/> : null}
              {tutorState ? 
                <WorkItem 
                  _id={cse_tutor._id}
                  title={cse_tutor.title}
                  position={cse_tutor.position}
                  startDate={cse_tutor.startDate}
                  endDate={cse_tutor.endDate}
                  desc={cse_tutor.desc} 
                  url={cse_tutor.url}/> : null}
              {ewbState ? 
                <WorkItem 
                  _id={EWB._id}
                  title={EWB.title}
                  position={EWB.position}
                  startDate={EWB.startDate}
                  endDate={EWB.endDate}
                  desc={EWB.desc} 
                  url={EWB.url}/> : null}

            </div>
          </div>

      </div>

    </div>
  );
}

export default Experience;