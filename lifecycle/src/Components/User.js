import React from 'react';


class User extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>{data.login}</div>
        )
    }
}

export default User
