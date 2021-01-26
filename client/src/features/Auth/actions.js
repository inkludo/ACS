import * as actionType from "./types";
import { api } from "../../api";
import { alertSuccess, alertError } from '../../app/actions';


const signInSuccess = (data) => ({ type: actionType.SIGN_IN_SUCCESS, payload: { token: data.token, userId: data.userId } })

export const singUp = (email, password) => (dispatch) => {
    api.signUp(email, password)
        .then(
            user => {
                dispatch({ type: actionType.SIGN_UP_SUCCESS });
                dispatch(alertSuccess(user.data.message));
            }
        )
        .catch(
            ({ response }) => {
                dispatch({ type: actionType.SIGN_UP_FAIL });
                dispatch(alertError(response.data.message));
            })
};

export const singIn = (email, password) => (dispatch) => {
    api.signIn(email, password)
        .then(
            ({ data }) => {
                console.log(data)
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('expirationDate', expirationDate)
                dispatch(signInSuccess(data));
                dispatch(autoLogout(data.expiresIn))
            }
        )
        .catch(
            ({ response }) => {
                dispatch({ type: actionType.SIGN_IN_FAIL });
                dispatch(alertError(response.data.message));
            }
        )
};

const autoLogout = (time) => (dispatch) => (
    setTimeout(() => {
        dispatch(logout())
    }, time * 1000)
);

export const logout = () => {

    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: actionType.AUTH_LOGOUT
    }
}

export const autoLogin = () => (dispatch) => {

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (!token) {
        dispatch(logout())
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if (expirationDate <= new Date()) {
            dispatch(logout())
        } else {
            dispatch(signInSuccess(token, userId))
            dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }

}


