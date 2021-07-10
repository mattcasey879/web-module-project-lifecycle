import React from 'react';


class User extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div >
                <div className='App-header'>
                    <h2>Current User:</h2>
                    <h4>{data.name}</h4>
                </div>
                
                <p>Username: {data.login}</p>
            </div>
        )
    }
}

export default User
