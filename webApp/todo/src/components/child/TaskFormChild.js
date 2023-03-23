import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { closeForm } from "../../actions/formAction";
import { addWork, editWork } from "../../actions/workAction";
import * as type from '../../constants/actionTypes';
import { createAxios } from "../../actions/utils/axiosJWT";

const TaskForm = () => {
    // const isToggleForm = useSelector(state => state.formReducer);
    const userState = useSelector(state => state.authenReducer);
    const formState = useSelector(state => state.formReducer);
    const [workName, setWorkName] = useState('');
    const [workStatus, setWorkStatus] = useState(true);
    const [buttonName, setButtonName] = useState('Thêm');
    const [workNameError, setWorkNameError] = useState('');
    const dispatch = useDispatch();
    let axiosJWT = createAxios(userState.currentUser, type.LOGIN_SUCCESS, dispatch);
    useEffect(() => {
        if (formState.isEdit) {
            setWorkName(formState.workName);
            setWorkStatus(formState.workStatus);
            setButtonName('Sửa');
        }
    }, [formState.workName, formState.workStatus, formState.isEdit])
    const handleCloseForm = () => {
        dispatch(closeForm());
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!workName || workName === '') {
            setWorkNameError(<label className="text-danger">Tên công việc không hợp lệ!</label>);
        }
        else {
            setWorkNameError('');
            if (formState.isEdit) {
                let oldWork = {
                    workName,
                    workStatus,
                    workId: formState.workId
                }
                dispatch(editWork(oldWork, userState.currentUser.accessToken, axiosJWT))
            } else {
                let newWork = {
                    workName,
                    workStatus
                }
                dispatch(addWork(newWork, userState.currentUser.accessToken, axiosJWT))
            }
            clearInputForm();
            dispatch(closeForm());
        }
    }
    const clearInputForm = () => {
        setWorkName('');
        setWorkStatus(false)
    }
    return (
        <div className="card">
            <div className="card-header text-white bg-primary">
                <h5 className="card-title">
                    Thêm công việc
                </h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group mb-2">
                        <label>Tên công việc</label>
                        <input className="form-control" value={workName} onChange={(e) => setWorkName(e.target.value)} name='workName' type="text" />
                    </div>
                    <div className="form-group mb-2">
                        {workNameError}
                    </div>
                    <label>Trạng thái</label>
                    <select className="form-control" value={workStatus} onChange={(e) => setWorkStatus(e.target.value)} name="workStatus" required>
                        <option value="true">Kích hoạt</option>
                        <option value="false">Ẩn</option>
                    </select>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button type="button" onClick={() => handleCloseForm()} className="btn btn-danger mx-3">Hủy</button>
                        <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">{buttonName}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TaskForm;