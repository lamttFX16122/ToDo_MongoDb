import { baseUrl } from '../share/baseUrl';
import * as type from './../constants/actionTypes';

export const sortNameAZ = () => dispatch => {
    try {
        dispatch({ type: type.SORT_NAME_AZ })
    }
    catch (err) {
        console.log(err);
    }
}

export const sortNameZA = () => dispatch => {
    try {
        dispatch({ type: type.SORT_NAME_ZA })
    }
    catch (err) {
        console.log(err);
    }
}

export const sortStatusTrue = () => dispatch => {
    try {
        dispatch({ type: type.SORT_STATUS_TRUE })
    }
    catch (err) {
        console.log(err);
    }
}

export const sortStatusFalse = () => dispatch => {
    try {
        dispatch({ type: type.SORT_STATUS_FALSE })
    }
    catch (err) {
        console.log(err);
    }
}

export const onSearch = (key, accessToken, axiosJWT) => async dispatch => {
    try {
        const result = await axiosJWT.post(baseUrl + 'v1/find-work', { key: key }, {
            headers: {
                token: accessToken
            }
        });
        dispatch({ type: type.ON_SEARCH, payload: result.data.payload });
    }
    catch (err) {
        dispatch({ type: type.END_SEARCH });
    }
}
export const endSearch = () => async dispatch => {
    try {
        dispatch({ type: type.END_SEARCH });
    }
    catch (err) {

    }
}
// export const getAllWorks = (accessToken) => async dispatch => {
//     try {
//         const works = await axios.get(baseUrl + 'v1/get-all-works', {
//             headers: {
//                 token: accessToken
//             }
//         });
//         dispatch({ type: type.GET_ALL_WORKS, payload: works.data.payload });
//     }
//     catch {
//         console.log('ERRR')
//     }
// }