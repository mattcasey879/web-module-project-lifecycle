import axios from 'axios';
import React from 'react'
import './App.css';
import User from './Components/User'
import UserFollowers from './Components/UserFollowers';

const Api = 'https://api.github.com/users'

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }
  componentDidMount() {
    axios.get(`${Api}/mattcasey879`)
    .then(res => this.setState({user: res.data}))
    .catch(err => alert(err))
    axios.get(`${Api}/mattcasey879/followers`)
    .then(res => this.setState({...this.state, followers: res.data}))
    .catch(err => alert(err + 'Could not get follwers!'))
  }
  render(){
    return (
        <div className='App'>
          <User data={this.state.user}/>
          <UserFollowers data={this.state.followers}/>
        </div>
    )
  }
}

export default App;
