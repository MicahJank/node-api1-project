import React from 'react';

import userIcon from '../imgs/usericon.png';

import { Icon, Item } from 'semantic-ui-react';




const User = ({ user, deleteUser }) => {

    const deleteHandler = () => {
        deleteUser(user.id);
    }

    return (
        <Item>
            <Icon size='huge' name='user' />
            
            <Item.Content>
                <Item.Header>{user.name}</Item.Header>
                <Item.Meta>Bio</Item.Meta>
                <Item.Description>
                    <p>{user.bio}</p>
                </Item.Description>
            </Item.Content>
            <Icon onClick={deleteHandler} name='user delete' />
        </Item>
    )
};

export default User;