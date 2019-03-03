import React from 'react'
import User from './User'

const UserList = (props) => {
  return (
    <div>
      {props.user.map( (user, i) => ( <User user={user} key={i} /> ))}
    </div>
  );
}

export default UserList