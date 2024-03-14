import {
    INCREMENT, DECREMENT,
    FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
    CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS,
    DELETE_USER_ERROR, DELETE_USER_REQUEST, DELETE_USER_SUCCESS
} from './types';
import axios from 'axios';

export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};

//Get all users
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            let res = await axios.get("http://localhost:8080/users/all")
            let data = res && res.data ? res.data : [];
            dispatch(fetchUserSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUserError());
        }

    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}

//Create User 
export const createNewUserRedux = (email, password, userName) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, userName })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUsers());
            }
        } catch (error) {
            console.log(error);
            dispatch(createUserError());
        }

    }
}

export const createUserRequest = () => {
    return {
        type: CREATE_USER_REQUEST
    }
}

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    }
}

export const createUserError = () => {
    return {
        type: CREATE_USER_ERROR
    }
}

//Delete User
export const deleteUserRedux = (id) => {
    return async (dispatch, getState) => {
        dispatch(deleteUserRequest());
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`)
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUsers());
            }
        } catch (error) {
            console.log(error);
            dispatch(deleteUserError());
        }

    }
}

export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    }
}

export const deleteUserSuccess = () => {
    return {
        type: DELETE_USER_SUCCESS,
    }
}

export const deleteUserError = () => {
    return {
        type: DELETE_USER_ERROR
    }
}