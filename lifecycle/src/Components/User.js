import React from 'react';


class User extends React.Component {
    render() {
        const { data , toggleFollowers } = this.props
        return (
            <div className='user-container'>
                <div className='App-header'>
                    <h2>Current User:</h2>
                    <h4>{data.name}</h4>
                    
                </div>
                <div className='intro'>
                    <p>Username: {data.login}</p>
                    <button onClick={toggleFollowers} className='btn-primary'>Click to Show followers</button>
                </div>
            </div>
        )
    }
}

export default User
