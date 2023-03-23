import * as type from './../constants/actionTypes';

export const toggleForm = () => dispatch => {
    try {
        dispatch({ type: type.TOGGLE_FORM })
    }
    catch (err) {
        console.log(err);
    }
}

export const openForm = () => dispatch => {
    try {
        dispatch({ type: type.OPEN_FORM })
    }
    catch (err) {
        console.log(err);
    }
}

export const closeForm = () => dispatch => {
    try {
        dispatch({ type: type.CLOSE_FOM })
    }
    catch (err) {
        console.log(err);
    }
}

export const clickEditItem = (workId, workName, workStatus) => dispatch => {
    try {
        dispatch({ type: type.SET_VALUE_FORM, workId: workId, workName: workName, workStatus: workStatus })
    }
    catch (error) {
        console.log(error);
    }
}