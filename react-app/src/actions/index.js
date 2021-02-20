import axios from 'axios';

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const fetchUsers = () => dispatch => {
    dispatch({ type: GET_USERS_PENDING });
    axios.get('http://localhost:4000/api/users')
        .then(res => {
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_USERS_FAIL,
                payload: err
            })
        })
}

export const addUser = user => dispatch => {
    axios.post('http://localhost:4000/api/users', user)
        .then(res => {
            axios.get('http://localhost:4000/api/users')
                .then(res => {
                    dispatch({
                        type: GET_USERS_SUCCESS,
                        payload: res.data
                    });
                })
                .catch(err => {
                    dispatch({
                        type: GET_USERS_FAIL,
                        payload: err
                    })
                })
        })
        .catch(err => {
            dispatch({
                type: ADD_USER_FAIL,
                payload: err
            })
        })
}

export const deleteUser = userID => dispatch => {
    axios.delete(`http://localhost:4000/api/users/${userID}`)
        .then(res => {
            axios.get('http://localhost:4000/api/users')
                .then(res => {
                    dispatch({
                        type: GET_USERS_SUCCESS,
                        payload: res.data
                    });
                })
                .catch(err => {
                    dispatch({
                        type: GET_USERS_FAIL,
                        payload: err
                    })
                })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAIL,
                payload: err
            })
        })
}
