import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { useState } from "react";
const TaskList = () => {
    const workState = useSelector(state => state.workReducer);
    const controlState = useSelector(state => state.controlReducer);

    const [filterName, setFilterName] = useState('');
    const [filterStatus, setFilterStatus] = useState("-1");

    let renderItem = null;
    if (!workState.works || workState.works.length <= 0) {
        if (controlState.isSearch) {
            renderItem = <tr><td colSpan={4}>Không tìm thấy công việc!</td></tr>
        }
        else {
            renderItem = <tr><td colSpan={4}>Bạn chưa có công việc nào!</td></tr>
        }
    }
    else {
        let list = workState.works;
        if (controlState.sortNameAZ) {
            list = sortOption(list, 1)
        }
        if (controlState.sortNameZA) {
            list = sortOption(list, 2)
        }
        if (controlState.sortStatusTrue) {
            list = sortOption(list, 3)
        }
        if (controlState.sortStatusFalse) {
            list = sortOption(list, 4)
        }
        if (controlState.sortDefault) {
            list = sortOption(list, 5)
        }
        if (filterName.length > 0) {
            list = list.filter(work => {
                return work.workName.toUpperCase().indexOf(filterName.toUpperCase()) !== -1;
            })
        }
        if (filterStatus !== "-1") {
            let stt = filterStatus === "1" ? true : false;
            list = list.filter(work => work.workStatus === stt)
        }
        renderItem = list.map((work, index) => {
            return (
                <TaskItem key={index} work={work} index={index} />
            )
        })
    }
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <td className="text-center">STT</td>
                    <td className="text-center">Tên công việc</td>
                    <td className="text-center">Trạng thái</td>
                    <td className="text-center">Hành động</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" name="filterName" value={filterName} onChange={(e) => setFilterName(e.target.value)} className="form-control" />
                    </td>
                    <td>
                        <select className="form-control" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                            <option value="-1">Tất cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {/* <!-- ---- row data--- --> */}
                {renderItem}
                {/* <!-- -- End row data----> */}
            </tbody>
        </table>
    )
}
const sortOption = (arr, opt) => {
    if (opt === 1) {
        arr.sort((a, b) => a.workName.toUpperCase() !== b.workName.toUpperCase() ? a.workName.toUpperCase() < b.workName.toUpperCase() ? -1 : 1 : 0);
    }
    if (opt === 2) {
        arr.sort((a, b) => a.workName.toUpperCase() !== b.workName.toUpperCase() ? a.workName.toUpperCase() > b.workName.toUpperCase() ? -1 : 1 : 0);
    }

    if (opt === 3) {
        arr.sort((a, b) => a.workStatus !== b.workStatus ? a.workStatus > b.workStatus ? -1 : 1 : 0);
    }
    if (opt === 4) {
        arr.sort((a, b) => a.workStatus !== b.workStatus ? a.workStatus < b.workStatus ? -1 : 1 : 0);
    }
    if (opt === 5) {
        arr.sort((a, b) => 0);
    }
    return arr;
}
export default TaskList;