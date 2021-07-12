import axios from 'axios';
import React from 'react'
import './App.css';
import User from './Components/User'
import UserFollowers from './Components/UserFollowers';

const Api = 'https://api.github.com/users'

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    display: false
  }
  componentDidMount() {
    axios.get(`${Api}/mattcasey879`)
    .then(res => this.setState({user: res.data}))
    .catch(err => alert(err))
    axios.get(`${Api}/mattcasey879/followers`)
    .then(res => this.setState({...this.state, followers: res.data}))
    .catch(err => alert(err + 'Could not get follwers!'))
  }

  toggleFollowers = () => {
    this.setState({...this.state, display: !this.state.display})
  }

  render(){
    return (
        <div className='App'>
         {Object.keys(this.state.user).length === 0 ? <h3 id='loading'>Loading...</h3> : 
         <User data={this.state.user}
          toggleFollowers={this.toggleFollowers}/>}
          <div>
          
           {this.state.followers.length === 0 ? <div></div> : 
           this.state.display && <UserFollowers 
           data={this.state.followers}
           />}
          </div>
        </div>
    )
  }
}

export default App;
