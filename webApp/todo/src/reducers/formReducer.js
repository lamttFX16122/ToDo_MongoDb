import * as type from './../constants/actionTypes';

const initialState = {
    isDisplay: false,
    isEdit: false,
    workName: null,
    workStatus: true,
    workId: null
};
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.TOGGLE_FORM:
            return {
                ...state,
                isDisplay: !state.isDisplay,
                isEdit: false,
                workName: null,
                workStatus: true,
                workId: null
            }
        case type.CLOSE_FOM:
            return {
                ...state,
                isDisplay: false,
                isEdit: false,
                workName: null,
                workStatus: true,
                workId: null
            }
        case type.OPEN_FORM:
            return {
                ...state,
                isDisplay: true
            }
        case type.SET_VALUE_FORM:
            return {
                isDisplay: true,
                isEdit: true,
                workName: action.workName,
                workStatus: action.workStatus,
                workId: action.workId
            }
        default: return state;
    }
}
export default formReducer;