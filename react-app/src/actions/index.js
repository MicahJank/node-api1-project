import axios from 'axios';

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";
export const ADD_USER = "ADD_USER";

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
