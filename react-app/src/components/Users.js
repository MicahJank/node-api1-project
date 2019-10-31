import React, { useEffect } from 'react';

import { Item } from 'semantic-ui-react';

import { connect } from 'react-redux';

import User from './User.js';
import { fetchUsers, deleteUser } from '../actions';


const Users = ({ fetchUsers, users, deleteUser }) => {

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <Item.Group>
            {users.map(user => {
                return <User deleteUser={deleteUser} key={user.id} user={user} />
            })}
        </Item.Group>
    )
};

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        error: state.usersReducer.error,
        isPending: state.usersReducer.isPending
    }
}

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Users);