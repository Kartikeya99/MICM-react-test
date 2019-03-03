import React from 'react'
import '../css/user.css'


const User = (props) => {
  return(
  <div>
    <div className="container">
      <a className="name"><strong>{props.user.name}</strong>
      <div className="extraInfo">
        <p><strong>Street: </strong>{props.user.address.street}</p>
        <p><strong>Suite: </strong>{props.user.address.suite}</p>
        <p><strong>City: </strong>{props.user.address.city}</p>
        <p><strong>Zip: </strong>{props.user.address.zipcode}</p>
      </div>
      <span className="userName">({props.user.username})</span>
      </a>
    </div>
    <br />
  </div>
  );
}

export default User;