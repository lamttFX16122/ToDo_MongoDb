import jwt_Decode from 'jwt-decode';
import axios from 'axios';
import { baseUrl } from '../../share/baseUrl';
const refreshToken = async () => {
    try {
        // const API = axios.create({ withCredentials: true });
        // await API.post(baseUrl + 'refresh-token')
        //     .then(res => {
        //         console.log('>>>>>>>>>>>>>>>>>', res)
        //         return res.data;
        //     }).catch(err => {
        //         console.log('catch ERR')
        //     })
        const res = await axios.post(baseUrl + 'refresh-token', {}, {
            withCredentials: true
        });
        // console.log('========================================= ', res.)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export const createAxios = (user, stateSuccess, dispatch) => {
    const newInstance = axios.create({ withCredentials: true });
    newInstance.interceptors.request.use(async config => {
        let date = new Date();
        const decoded = await jwt_Decode(user?.accessToken);

        if (decoded.exp < date.getTime() / 1000) {
            const data = await refreshToken();
            // reset accesstoken
            // isAuth.currentUser.accessToken
            let refreshUser = {
                ...user,
                accessToken: data?.payload?.accessToken
            };
            dispatch({ type: stateSuccess, payload: refreshUser });
            config.headers['token'] = data?.payload?.accessToken;
        }
        return config;
    }, (err) => {
        console.log('err createAxios', err)
        return Promise.reject(err);
    })
    return newInstance;
}