import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
  message: [],
};

const vendorData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    case types.REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        message: payload,
      };
    case types.GET_VENDOR_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.GET_VENDOR_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_VENDOR_FAIL:
      return {
        ...state,
        isLoading:false,
        message: payload,
      };
    case types.EDIT_VENDOR_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.EDIT_VENDOR_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: payload,
      };
    case types.EDIT_VENDOR_FAIL:
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isLoading: false,
        message: payload,
      };

    default:
      return state;
  }
};

export default vendorData;
