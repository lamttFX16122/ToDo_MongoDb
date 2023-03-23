import * as type from './../constants/actionTypes';
const initialState = {
    works: [],
    worksBackup: []
}
const workReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_WORK_SUCCESS:
            return {
                ...state,
                works: action.payload
            }
        case type.ADD_WORK_FAIL:
            return state;
        case type.GET_ALL_WORKS:
            return {
                ...state,
                works: action.payload,
                worksBackup: action.payload
            }
        case type.EDIT_WORK_SUCCESS:
            return {
                ...state,
                works: action.payload
            }
        case type.EDIT_WORK_FAIL:
            return state;
        case type.DELETE_WORK_FAIL:
            return state;
        case type.DELETE_WORK_SUCCESS:
            return {
                ...state,
                works: action.payload
            }
        case type.ON_SEARCH:
            return {
                ...state,
                works: action.payload
            }
        default:
            return state;
    }
}
export default workReducer;