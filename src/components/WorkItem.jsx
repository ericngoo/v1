import React from 'react';

function WorkItem(props) {
    return (
        <div className="work-item-container">
            {console.log(props.url)}
            <h1><a href={props.url} target="blank">{props.title}</a></h1>
            <p>_id: {props._id}</p>
            <p>title: "{props.title}"</p>
            <p>position: "{props.position}"</p>
            <p>startDate: "{props.startDate}"</p>
            <p>endDate: "{props.endDate}"</p>
            <p>desc: Array</p>
            <p>[</p>
            <div style={{marginLeft:"2rem"}}>
                {props.desc.map((desc, index) => {
                    return (
                        <div className="work-info">
                            <p key={index}>"{desc}",</p>
                            <br/>
                        </div>
                    )
                })}
            </div>
            <p>]</p>
        </div>
    )
}

export default WorkItem;