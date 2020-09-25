import React from 'react';

function Section(props) {
    return (
        <div className={"section" + (props.dark ? " section-dark" : "")}>
          <div className="section-content" id={props.id}>
            <h1>{props.title}</h1>
            <h2 style={{color: "#4c5b64"}}>Test color</h2>
            <p>{props.subtitle}</p>
          </div>
        </div>
      );
}

export default Section;