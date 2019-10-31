import React from 'react';

import { Image, Item } from 'semantic-ui-react';


const User = ({ user }) => {

    return (
        <Item>
            <Item.Image size="tiny" src='' />
            
            <Item.Content>
                <Item.Header>{user.name}</Item.Header>
                <Item.Meta>Bio</Item.Meta>
                <Item.Description>
                    <p>{user.bio}</p>
                </Item.Description>
            </Item.Content>
        </Item>
    )
};

export default User;