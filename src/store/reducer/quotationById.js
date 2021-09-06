import * as types from '../const/types'

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: [],
    message:[],
  };
  
  const quotationsById = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_QUOTATIONS_ID_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_QUOTATIONS_ID_SUCCESS:
        return {
          ...state,
          isSuccess: true,
          isLoading:false,
          data: payload,
        };
      case types.GET_QUOTATIONS_ID_FAIL:
        return {
          ...state,
          isError: true,
          isLoading:false,
          message:payload
        };
      default:
        return state;
    }
  };
  
  export default quotationsById;
  