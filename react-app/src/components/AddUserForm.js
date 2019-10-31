import React, { useState } from 'react';
import { Form, FormButton } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { addUser } from '../actions';


const AddUserForm = (props) => {

    const [form, setForm] = useState({
        name: '',
        bio: ''
    })

    const handleChanges = e => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addUser(form);
        setForm({});
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Input name='name' label='Name' placeholder='name' value={form.name} onChange={handleChanges} />
            <Form.TextArea name='bio' label='Bio' placeholder='Tell use about yourself...' value={form.bio} onChange={handleChanges} />
            <Form.Button primary>Add User</Form.Button>
        </Form>

    )
}

export default connect(null, {addUser})(AddUserForm);