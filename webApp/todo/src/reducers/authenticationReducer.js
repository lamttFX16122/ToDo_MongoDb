import * as type from './../constants/actionTypes';
const initialState = {
    isAuthenticated: false,
    currentUser: null,
    login_Error: false,
    login_ErrorMessage: null,
};
var authenReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true,
                login_Error: false,
                login_ErrorMessage: null
            };
        case type.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null,
                login_Error: true,
                login_ErrorMessage: action.payload
            };
        case type.LOGIN_RESET:
            return state = initialState;
        case type.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                isAuthenticated: false,
                login_Error: false,
                login_ErrorMessage: null
            };
        case type.LOGOUT_FAIL:
            return {
                ...state,
                login_Error: true,
                login_ErrorMessage: action.payload || null
            };
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null,
                register_Error: false,
                register_ErrorMessage: null
            }
        // case type.REGISTER_FAIL:
        //     return {
        //         ...state,
        //         isAuthenticated: false,
        //         currentUser: null,
        //         register_Error: true,
        //         register_ErrorMessage: action.payload
        //     }
        default:
            return state;
    }
}
export default authenReducer;