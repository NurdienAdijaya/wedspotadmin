import axios from "axios";
import * as types from "../const/types";
import { BASE_URL } from "../const/server";
import { put, takeEvery } from "redux-saga/effects";

const token = localStorage.getItem("token");

function* quotationsList(action) {
  const { page, limit, sort_by, order_by, filter } = action;
  try {
    const res = yield axios.get(
      `${BASE_URL}/requests/vendor?page=${page}&limit=${limit}&sort_by=${sort_by}&order_by=${order_by}&status=${filter}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put({
      type: types.GET_ALL_QUOTATIONS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log("ini error", error);
    console.log("ini error data", error.response.data.errors);
    yield put({
      type: types.GET_ALL_QUOTATIONS_FAIL,
      payload: error.response.data.errors,
    });
  }
}

function* quotationsById(action) {
  const { id } = action;
  try {
    const res = yield axios.get(
      `${BASE_URL}/requests/${id}`
    );
    yield put({
      type: types.GET_QUOTATIONS_ID_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_QUOTATIONS_ID_FAIL,
      payload: error.response.data.errors,
    });
  }
}

export function* watchAllQuotations() {
  yield takeEvery(types.GET_ALL_QUOTATIONS_BEGIN, quotationsList);
}

export function* watchQuotationsById() {
  yield takeEvery(types.GET_QUOTATIONS_ID_BEGIN, quotationsById);
}
