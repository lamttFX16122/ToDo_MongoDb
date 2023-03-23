import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import TaskList from "./child/TaskListChild";
import TaskForm from './child/TaskFormChild';
import Control from './child/ControlChild';
import { toggleForm } from "../actions/formAction";
import { getAllWorks } from './../actions/workAction';
import { createAxios } from "../actions/utils/axiosJWT";
import * as type from '../constants/actionTypes';
import Navigation from "./NavigationComponent";

const HomePage = () => {
    const isAuth = useSelector(state => state.authenReducer);
    const isToggleForm = useSelector(state => state.formReducer);
    const dispatch = useDispatch();
    let axiosJWT = createAxios(isAuth.currentUser, type.LOGIN_SUCCESS, dispatch);
    useEffect(() => {
        dispatch(getAllWorks(isAuth.currentUser.accessToken, axiosJWT))
    }, [])
    let classForm = '';
    let isDisplayForm = '';
    let classInfo = 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
    if (isToggleForm.isDisplay) {
        isDisplayForm = <TaskForm></TaskForm>;
        classForm = `col col-xs-12 col-sm-12 col-md-4 col-lg-4 mb-3`;
        classInfo = 'col-xs-12 col-sm-12 col-md-8 col-lg-8';
    }
    if (!isAuth.isAuthenticated) {
        return (<Navigate to='/login' />)
    }
    const handleDisplayForm = () => {
        dispatch(toggleForm())
    }
    return (
        <div>
            <Navigation />
            {/* <!------ Content--------> */}
            <div className="container">
                <div className="row mt-3">
                    {/* <!-- --- Left Content --- --> */}
                    <div className={classForm}>
                        {/* <!--- Form Activity ----> */}
                        {isDisplayForm}
                        {/* <!-- End Form Activity--> */}
                    </div>
                    {/* <!-- - End Left Content ----> */}

                    {/* <!--- Right Content ----> */}
                    <div className={classInfo}>
                        {/* <!-- --- Button Add Work --- --> */}
                        <button type="button" onClick={() => handleDisplayForm()} className="btn btn-primary"><span className="fa-solid fa-plus"></span> Thêm công việc</button>
                        {/* <!-- - End Button Add Work ----> */}

                        {/* <!-- -- Filter and Sort -- --> */}
                        <div className="row mt-3">
                            {/* Search and Sort */}
                            <Control></Control>
                        </div>
                        {/* <!-- End Filter and Sort ----> */}

                        {/* <!----Table data list ----> */}
                        <div className="row mt-3">
                            <div className="col-12">
                                <TaskList>
                                    {/* {this.showContentMenus(works.payload)} */}
                                </TaskList>
                            </div>
                        </div>
                        {/* <!--End Table data list --> */}
                    </div>
                    {/* <!-- End Right Content --> */}
                </div>
            </div>
            {/* <!---- End Content------> */}
        </div>
    )
}

export default HomePage;