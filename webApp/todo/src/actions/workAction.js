import * as type from './../constants/actionTypes';
import { baseUrl } from '../share/baseUrl';
export const getAllWorks = (accessToken, axiosJWT) => async dispatch => {
    try {
        const works = await axiosJWT.get(baseUrl + 'v1/get-all-works', {
            headers: {
                token: accessToken
            }
        });
        dispatch({ type: type.GET_ALL_WORKS, payload: works.data.payload });
    }
    catch (err) {
        console.log(err)
    }
}

export const addWork = (work, accessToken, axiosJWT) => async dispatch => {
    try {
        await axiosJWT.post(baseUrl + 'v1/add-work', work, {
            headers: {
                token: accessToken
            }
        })
        const works = await axiosJWT.get(baseUrl + 'v1/get-all-works', {
            headers: {
                token: accessToken
            }
        });
        dispatch({ type: type.ADD_WORK_SUCCESS, payload: works.data.payload });
    }
    catch {
        console.log('ERRR')
        dispatch({ type: type.ADD_WORK_FAIL });
    }
}
export const editWork = (work, accessToken, axiosJWT) => async dispatch => {
    try {
        await axiosJWT.post(baseUrl + 'v1/edit-work', work, {
            headers: {
                token: accessToken
            }
        })
        const works = await axiosJWT.get(baseUrl + 'v1/get-all-works', {
            headers: {
                token: accessToken
            }
        });
        dispatch({ type: type.EDIT_WORK_SUCCESS, payload: works.data.payload });
    }
    catch {
        console.log('ERRR')
        dispatch({ type: type.EDIT_WORK_FAIL });
    }
}
export const deleteWork = (_id, accessToken, axiosJWT) => async dispatch => {
    try {
        await axiosJWT.delete(baseUrl + 'v1/delete-work', {
            headers: {
                token: accessToken
            },
            data: {
                _id: _id
            }
        })
        const works = await axiosJWT.get(baseUrl + 'v1/get-all-works', {
            headers: {
                token: accessToken
            }
        });
        dispatch({ type: type.DELETE_WORK_SUCCESS, payload: works.data.payload });
    }
    catch (error) {
        console.log(error)
        dispatch({ type: type.DELETE_WORK_FAIL });
    }
}
// export const onFilterName=(keyWord)
// export const logout = (_id, accessToken, navigate) => async dispatch => {
//     try {
//         await axios.post(baseUrl + 'logout', _id, {
//             headers: {
//                 token: accessToken
//             }
//         })
//         dispatch({ type: type.LOGOUT_SUCCESS });
//         navigate('/login');
//     } catch (error) {
//         const errorMessage = error.response.data.message;
//         dispatch({ type: type.LOGOUT_FAIL, payload: errorMessage });
//     }
// }
