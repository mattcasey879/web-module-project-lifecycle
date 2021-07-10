import React from 'react';


class UserFollowers extends React.Component {
    
    render() {
        const { data } = this.props
        return (
            <div className='followers'>
                <h4>Users Followers:</h4>
                {data.map(person => <div key={person.id}><p>{person.login}</p> <a className='git-hub' href={`https://github.com/${person.login}`} target='_blank' rel="noopener noreferrer">Go to their Github?</a></div>)}
            </div>
        )
    }
}

export default UserFollowers