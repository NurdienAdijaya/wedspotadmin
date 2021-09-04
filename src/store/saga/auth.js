import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

const token = localStorage.getItem('token')

function* vendorLogin(action) {
  try {
    const res = yield axios.post(`${BASE_URL}/vendors/login`, action.action);
    yield localStorage.setItem("token",res.data.token);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: res.data.currentVendor,
    });
  } catch (error) {
    console.log(error.response.data.errors[0]);
    yield put({
      type: types.LOGIN_FAIL,
      payload: error.response.data.errors,
    });
  }
}

function* vendorRegister(action) {
  try {
    const res = yield axios.post(`${BASE_URL}/vendors/register`, action.action);
    yield localStorage.setItem("token", res.data.token);
    yield put({
      type: types.REGISTER_SUCCESS,
      payload: res.data.currentVendor,
    });
  } catch (error) {
      console.log(error)
    yield put({
      type: types.REGISTER_FAIL,
      payload: error.response.data.errors,
    });
  }
}


function* getVendor() {
  try {
    const res = yield axios.get(`${BASE_URL}/vendors/getMe`,
    {headers:{Authorization: `Bearer ${token}`}});
    yield put({
      type: types.GET_VENDOR_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
      console.log(error)
    yield put({
      type: types.GET_VENDOR_FAIL,
      payload: error.response
    })
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN_PENDING, vendorLogin);
}

export function* watchRegister() {
  yield takeEvery(types.REGISTER_PENDING, vendorRegister);
}

export function* watchGetVendor() {
  yield takeEvery(types.GET_VENDOR_BEGIN, getVendor);
}
