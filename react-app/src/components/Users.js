import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import User from './User.js';
import { fetchUsers } from '../actions';


const Users = ({ fetchUsers, users }) => {

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        error: state.usersReducer.error,
        isPending: state.usersReducer.isPending
    }
}

export default connect(mapStateToProps, { fetchUsers })(Users);