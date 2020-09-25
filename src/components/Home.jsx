import React, { useEffect } from 'react';

function Home(props) {

    useEffect(function() {
        const script = document.createElement('script')
        script.src = process.env.PUBLIC_URL + '/termynal.js'
        script.async = true
        const att = document.createAttribute("data-termynal-container")
        att.value = "#termynal"
        script.setAttributeNode(att)

        document.body.appendChild(script)
      }, [])

    return (
        <div className="home" id={props.id}>

            <div className="home-text">
            <h1>Hi, my name is <span className="name-emp">Eric Ngo</span>, or <span style={{color: '#d9515d'}}>en</span> for short.</h1>
            </div>
            

            <div  className="console home-term" id="termynal" data-termynal data-ty-startDelay="50" data-ty-typeDelay="65" data-ty-lineDelay="900">
                <span data-ty="input">npm install en</span>
                <span data-ty="progress"></span>
                <span data-ty>Successfully installed en!</span>

                <span data-ty="input">node</span>

                <span data-ty="input" data-ty-prompt=">">const en = require('en')</span>

                <span data-ty="input" data-ty-prompt=">">en.whoAmI</span>
                <span data-ty className="tab">["Software Developer", "Student", "Researcher"]</span>

                <span data-ty="input" data-ty-prompt=">">en.resume</span>
                <span data-ty><a className="hvr-forward tab" href="https://pbs.twimg.com/media/Ebti-8iWkAEu_dP.jpg" target="blank">resume.pdf</a></span>
            
            </div>
        </div>
    );
}

export default Home;