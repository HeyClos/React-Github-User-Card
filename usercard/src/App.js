import React, { Component } from 'react';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      githubUsers: {},
      githubFollowers: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowers();
  }

  handleUserChange = e => {
    this.setState({ githubUsers: e.target.value });
  };

  fetchUsers = () => {
    fetch(`https://api.github.com/users/heyclos`)
      .then(response => {
        // first promise resolution is used to format the data.
        return response.json();
      })
      .then(users => this.setState({ githubUsers: [users] }))
      .catch(err => {
        console.log(err);
      });
  };
  
  fetchFollowers = () => {
    fetch(`https://api.github.com/users/heyclos/followers`)
      .then(response => {
        // first promise resolution is used to format the data.
        return response.json();
      })
      .then(followers => this.setState({ githubFollowers: followers }))
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    console.log(this.state)
    return (
      <div>
        <input placeholder="search users" />
        <h2>USERS</h2>
        <UserCard gitUser={this.state.githubUsers} />
        <FollowerCard />
      </div>
    )
  }
}

export default App;
