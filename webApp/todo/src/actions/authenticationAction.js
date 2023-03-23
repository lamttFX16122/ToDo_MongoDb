import axios from "axios";
import * as type from './../constants/actionTypes';
import { baseUrl } from './../share/baseUrl';

// LOGIN
export const login = (email, password, navigate) => async dispatch => {
    try {
        const instance = axios.create({
            withCredentials: true
        })
        const res = await instance.post(baseUrl + 'login', { email, password });
        dispatch({ type: type.LOGIN_SUCCESS, payload: res.data.payload });
        navigate('/')
    } catch (error) {
        const errorMessage = error.response.data.message;
        dispatch({ type: type.LOGIN_FAIL, payload: errorMessage });
    }
};
export const loginReset = () => dispatch => {
    dispatch({ type: type.LOGIN_RESET });
}
// LOGOUT
export const logout = (_id, accessToken, navigate, axiosJWT) => async dispatch => {
    try {
        await axiosJWT.post(baseUrl + 'logout', _id, {
            headers: {
                token: accessToken
            }
        })
        dispatch({ type: type.LOGOUT_SUCCESS });
        navigate('/login');
    } catch (error) {
        console.log(error)
        const errorMessage = error.response.data.message;
        dispatch({ type: type.LOGOUT_FAIL, payload: errorMessage });
    }
}

// REGISTER
export const register = (email, password, userName, navigate) => async dispatch => {
    try {
        await axios.post(baseUrl + `v1/register`, { email, password, userName });
        dispatch({ type: type.REGISTER_SUCCESS })
        navigate('/login');
    } catch (error) {
        // const errorMessage = error.response.data.message;
        // dispatch({ type: type.REGISTER_FAIL, payload: errorMessage });
    }
}

// Check is mail
export const checkEmail = async (email) => {
    try {
        return await axios.post(baseUrl + `v1/check-email-register`, { email })
    } catch (error) {

    }
}