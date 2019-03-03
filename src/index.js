import React, { Component } from 'react';
import { render } from 'react-dom';
import UserList from './components/UserList'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isloading: true,
      users: []
    };
  }

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    var app=this;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var jsonResponse=JSON.parse(xhttp.responseText)
            app.setState({users:jsonResponse ,
            isloading:false});
       }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users", true);
    xhttp.send(); 
  }

  render() {
    return (
      <div>
        {this.state.isloading ? 
          (<h1>User (loading)</h1>)  :
          (<div>
              <h1>Users</h1>
              <UserList user={this.state.users}/>
          </div>)
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
