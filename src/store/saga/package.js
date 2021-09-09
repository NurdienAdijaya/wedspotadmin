import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

const token = localStorage.getItem("token");

function* packageList(action) {
  const { page, limit } = action;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages/vendor?page=${page}&limit=${limit}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(res);
    yield put({
      type: types.GET_ALL_PACKAGE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("ini error", error);
    console.log("ini error data", error.response.data.errors);
    yield put({
      type: types.GET_ALL_PACKAGE_FAIL,
      payload: error.response.data.errors,
    });
  }
}

function* packageById(action) {
  const { id } = action;
  try {
    const res = yield axios.get(
      `${BASE_URL}/packages/${id}`
    );
    console.log(res);
    yield put({
      type: types.GET_PACKAGE_ID_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_PACKAGE_ID_FAIL,
      payload: error.response.data.errors,
    });
  }
}

function* createPackage(action) {
  const { props } = action;
  console.log(props)
  let dataToSend = new FormData();
  dataToSend.append("package_name", props.package_name);
  dataToSend.append("package_location", props.package_location);
  dataToSend.append("package_details", props.package_details);
  dataToSend.append("package_price", props.package_price);
  dataToSend.append("package_services", props.package_services);
  dataToSend.append("package_capacity", props.package_capacity);
  dataToSend.append("package_album", props.package_album);
  try {
    const res = yield axios.post(
      `${BASE_URL}/packages`,
      dataToSend,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put({
      type: types.CREATE_PACKAGE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error.response)
    console.log(props)
    yield put({
      type: types.CREATE_PACKAGE_FAIL,
      payload: error.response,
    });
  }
}

function* editPackage(action) {
  const { props } = action;
  let dataToSend = new FormData();
  dataToSend.append("package_name", props.package_name);
  dataToSend.append("package_location", props.package_location);
  dataToSend.append("package_details", props.package_details);
  dataToSend.append("package_price", props.package_price);
  dataToSend.append("package_services", props.package_services);
  dataToSend.append("package_capacity", props.package_capacity);
  dataToSend.append("package_album", props.package_album);
  try {
    const res = yield axios.put(
      `${BASE_URL}/packages/${props.package_id}`,
      dataToSend,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put({
      type: types.EDIT_PACKAGE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error.response)
    yield put({
      type: types.EDIT_PACKAGE_FAIL,
      payload: error.response.data.errors,
    });
  }
}

export function* watchAllPackage() {
  yield takeEvery(types.GET_ALL_PACKAGE_BEGIN, packageList);
}

export function* watchPackageById() {
  yield takeEvery(types.GET_PACKAGE_ID_BEGIN, packageById);
}

export function* watchCreatePackage() {
  yield takeEvery(types.CREATE_PACKAGE_BEGIN, createPackage);
}

export function* watchEditPackage() {
  yield takeEvery(types.EDIT_PACKAGE_BEGIN, editPackage);
}
