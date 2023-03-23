import { useDispatch, useSelector } from "react-redux";
import { sortNameAZ, sortStatusFalse, sortNameZA, sortStatusTrue } from './../../actions/controlAction';
const Sort = () => {
    const controlState = useSelector(state => state.controlReducer);
    const dispatch = useDispatch();
    const sortSelected = <i className="fa-solid fa-check"></i>;
    return (
        <div className="btn-group">
            <button className="btn btn-primary dropdown-toggle" id="dropdownSort" data-bs-toggle="dropdown" aria-expanded="true" type="button"><span className="fa-solid fa-arrow-up-arrow-down>"></span> Sắp xếp</button>
            <ul className="dropdown-menu" aria-labelledby="dropdownSort">
                <li onClick={() => dispatch(sortNameAZ())}>
                    <a href="/#" className="dropdown-item d-flex align-items-center justify-content-between">
                        <span><span className="fa-solid fa-arrow-down-a-z"></span> Tên A-Z</span>
                        {controlState.sortNameAZ ? sortSelected : ''}
                    </a>
                </li>
                <li onClick={() => dispatch(sortNameZA())}>
                    <a href="/#" className="dropdown-item d-flex align-items-center justify-content-between">
                        <span><span className="fa-solid fa-arrow-down-z-a"></span> Tên Z-A</span>
                        {controlState.sortNameZA ? sortSelected : ''}
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li onClick={() => dispatch(sortStatusTrue())}>
                    <a href="/#" className="dropdown-item d-flex align-items-center justify-content-between">
                        <span><span className="fa-solid fa-play"></span> Trạng thái kích hoạt</span>
                        {controlState.sortStatusTrue ? sortSelected : ''}
                    </a>
                </li>
                <li onClick={() => dispatch(sortStatusFalse())}>
                    <a href="/#" className="dropdown-item d-flex align-items-center justify-content-between">
                        <span><span className="fa-solid fa-stop"></span> Trạng thái ẩn</span>
                        {controlState.sortStatusFalse ? sortSelected : ''}
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default Sort;