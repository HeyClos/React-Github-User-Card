import React from 'react';
import User from './User';

const UserCard = (props) => {
    console.log(props)
    return (
        <div>
            {props.gitUser.map(user => (
                <User key={user.id} user={user} />
            ))} 
        </div>
    )
}

export default UserCard;



