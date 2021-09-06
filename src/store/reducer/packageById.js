import * as types from '../const/types'

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: [],
    message:[],
  };
  
  const packageById = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_PACKAGE_ID_BEGIN:
        return {
          ...state,
          isLoading: true,
        };
      case types.GET_PACKAGE_ID_SUCCESS:
        return {
          ...state,
          isSuccess: true,
          isLoading:false,
          data: payload,
        };
      case types.GET_PACKAGE_ID_FAIL:
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
  
  export default packageById;
  