import React from 'react';


class User extends React.Component {

    state = {
        user: ''
    }

    onChangeUser = (e) => {
        this.setState({user: e.target.value})
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmitNewUser(this.state.user)
    }
    render() {
        const { username , toggleFollowers } = this.props
        return (
            <div className='user-container'>
                <div className='App-header'>
                    <h2>Current User:</h2>
                    <h4>{username}</h4>
                    
                </div>
                <form>
                    <input placeholder='change username' value={this.user} onChange={this.onChangeUser}></input>
                     <button onClick={this.onSubmitForm}>Submit</button>
                </form>
                <div className='intro'>
                    <p>Username: {username}</p>
                    <button onClick={toggleFollowers} className='btn-primary'>Click to Show followers</button>
                </div>
            </div>
        )
    }
}

export default User
