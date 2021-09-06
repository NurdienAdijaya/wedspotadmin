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
      payload: res.data.data,
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

export function* watchAllPackage() {
  yield takeEvery(types.GET_ALL_PACKAGE_BEGIN, packageList);
}

export function* watchPackageById() {
  yield takeEvery(types.GET_PACKAGE_ID_BEGIN, packageById);
}
