import React from 'react';

export default function Stage(props) {
    //assign participants from store
    let participants = props.participants;
    //use filter to create array with people onstage 
    const stageParticipants = props.participants.filter(people => people.onStage)
    //function to return div with map from our on stageParticipants
    const onStage = stageParticipants.map(participant => {
        return (
            <div>
                <img src={participant.avatar} alt={participant.name}></img>
                <h6>{participant.name}</h6>
            </div>
        )
    });
    // return div with class name for css
    return (
        <div className="Stage">
            {onStage}
        </div>
    );

}