import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSearch } from './../../actions/controlAction';
import { createAxios } from "../../actions/utils/axiosJWT";
import * as type from '../../constants/actionTypes';
const Search = () => {
    const isAuth = useSelector(state => state.authenReducer);
    const [key, setKey] = useState('');
    const dispatch = useDispatch();
    let axiosJWT = createAxios(isAuth.currentUser, type.LOGIN_SUCCESS, dispatch);
    const onSubmitSearch = () => {
        dispatch(onSearch(key, isAuth.currentUser.accessToken, axiosJWT));
    }
    return (
        <div className="input-group">
            <input value={key} onChange={(e) => setKey(e.target.value)} type="text" className="form-control" placeholder="Nhập từ khóa ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick={() => onSubmitSearch()} className="btn btn-primary" type="button" id="button-addon2"><span className="fa-solid fa-magnifying-glass"></span> Tìm</button>
        </div>
    )
}
export default Search;