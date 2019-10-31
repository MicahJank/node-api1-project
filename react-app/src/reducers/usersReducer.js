import { GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USERS_PENDING, DELETE_USER, DELETE_USER_FAIL, ADD_USER, ADD_USER_FAIL, EDIT_USER} from '../actions';
const initalState = {
    users: [],
    isPending: false,
    error: ''
}

export const usersReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_USERS_PENDING:
            return {
                ...state,
                isPending: true,
                error: ''
            }
            break;

        case GET_USERS_FAIL:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }
            break;
        
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isPending: false,
                error: ''
            }
            break;

        case ADD_USER:
            return state;
            break;

        case ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload
            };
            break;

        case DELETE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
            break;

        default:
            return state;
    }
} 