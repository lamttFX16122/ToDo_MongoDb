import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { createAxios } from "../../actions/utils/axiosJWT";
import * as type from '../../constants/actionTypes';

// import { useState } from "react";
import { editWork, deleteWork } from "../../actions/workAction";
import { clickEditItem } from "../../actions/formAction";
const TaskItem = (props) => {
    const userState = useSelector(state => state.authenReducer);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(userState.currentUser, type.LOGIN_SUCCESS, dispatch);
    const handleItemEdit = (work) => {
        dispatch(clickEditItem(work._id, work.workName, work.workStatus))
    }
    const handleClickStatus = (work) => {
        let oldWork = {
            workName: work.workName,
            workStatus: !work.workStatus,
            workId: work._id
        }
        dispatch(editWork(oldWork, userState.currentUser.accessToken, axiosJWT))
    }
    const handleDeleteWork = (_id) => {
        confirmAlert({
            title: 'Xác nhận',
            message: 'Bạn có muốn xóa công việc này?',
            buttons: [
                {
                    label: 'Có',
                    onClick: () =>
                        dispatch(deleteWork(_id, userState.currentUser.accessToken, axiosJWT))
                },
                {
                    label: 'Hủy',
                    onClick: () => {
                        return false;
                    }
                }
            ]
        })
    }
    const { work, index } = props;
    return (
        <tr key={index}>
            <td className="text-center">{index + 1}</td>
            <td>{work.workName}</td>
            <td className="text-center">
                <span onClickCapture={() => handleClickStatus(work)} className={work.workStatus === true ? "badge bg-success" : "badge bg-danger"}>{work.workStatus === true ? 'Kích hoạt' : 'Ẩn'}</span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={() => handleItemEdit(work)} >
                    <span className="fa-solid fa-pencil"></span> Sửa
                </button>
                &nbsp;
                <button onClick={() => handleDeleteWork(work._id)} type="button" className="btn btn-danger">
                    <span className="fa-solid fa-trash-can"></span> Xóa
                </button>
            </td>
        </tr>
    )
}
export default TaskItem;