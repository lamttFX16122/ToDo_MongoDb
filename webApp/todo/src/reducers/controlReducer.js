import * as type from './../constants/actionTypes';
const initialState = {
    sortNameAZ: false,
    sortNameZA: false,
    sortStatusTrue: false,
    sortStatusFalse: false,
    sortDefault: true,
    isSearch: false
}
const controlReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.SORT_NAME_AZ:
            return {
                ...state,
                sortNameAZ: !state.sortNameAZ,
                sortNameZA: false,
                sortStatusTrue: false,
                sortStatusFalse: false,
                sortDefault: state.sortNameAZ
            };
        case type.SORT_NAME_ZA:
            return {
                ...state,
                sortNameAZ: false,
                sortNameZA: !state.sortNameZA,
                sortStatusTrue: false,
                sortStatusFalse: false,
                sortDefault: state.sortNameZA
            };
        case type.SORT_STATUS_TRUE:
            return {
                ...state,
                sortNameAZ: false,
                sortNameZA: false,
                sortStatusTrue: !state.sortStatusTrue,
                sortStatusFalse: false,
                sortDefault: state.sortStatusTrue
            };
        case type.SORT_STATUS_FALSE:
            return {
                ...state,
                sortNameAZ: false,
                sortNameZA: false,
                sortStatusTrue: false,
                sortStatusFalse: !state.sortStatusFalse,
                sortDefault: state.sortStatusFalse
            };
        case type.ON_SEARCH:
            return {
                ...state,
                isSearch: true
            }
        case type.END_SEARCH:
            return {
                ...state,
                isSearch: false
            }
        default:
            return state;
    }
}
export default controlReducer;