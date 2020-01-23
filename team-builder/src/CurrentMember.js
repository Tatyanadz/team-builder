import React from 'react';


const CurrentMember = props => {
    return (
        <div>
            {props.team.map(member => (
                <div key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>

            ))}
        </div>
    )
}

export default CurrentMember;