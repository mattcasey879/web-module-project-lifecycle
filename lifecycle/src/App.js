import axios from 'axios';
import React from 'react'
import './App.css';
import User from './Components/User'
import UserFollowers from './Components/UserFollowers';

const Api = 'https://api.github.com/users'

class App extends React.Component {
  state = {
    username: 'mattcasey879',
    userData: {},
    followers: [],
    display: false
  }
  componentDidMount() {
    axios.get(`${Api}/${this.state.username}`)
    .then(res => this.setState({...this.state, userData: res.data}))
    .catch(err => alert(err))
    axios.get(`${Api}/${this.state.username}/followers`)
    .then(res => this.setState({...this.state, followers: res.data}))
    .catch(err => alert(err + ' Could not get follwers!'))
    
  }

  componentDidUpdate(prevProps, prevState) {
   if(prevState.username !== this.state.username){
    axios.get(`${Api}/${this.state.username}`)
    .then(res => this.setState({...this.state, userData: res.data}))
    .catch(err => alert(err))
    axios.get(`${Api}/${this.state.username}/followers`)
    .then(res => this.setState({...this.state, followers: res.data}))
    .catch(err => alert(err + ' Could not get follwers!'))
   }
  }


onSubmitNewUser = (newUsername) => {
  this.setState({...this.state, username: newUsername})
}

  toggleFollowers = () => {
    this.setState({...this.state, display: !this.state.display})
  }

  render(){
    return (
        <div className='App'>
         {Object.keys(this.state.userData).length === 0 ? <h3 id='loading'>Loading...</h3> : 
         <User username={this.state.username}
          toggleFollowers={this.toggleFollowers}
          onSubmitNewUser={this.onSubmitNewUser}/>}
          <div>
          
           {this.state.followers.length === 0 ? <div><h4> Loading...</h4></div> : 
           this.state.display && <UserFollowers 
           data={this.state.followers}
           />}
          </div>
        </div>
    )
  }
}

export default App;
