import * as types from "../const/types";

export const getPackage = (page, limit) => {
  return {
    type: types.GET_ALL_PACKAGE_BEGIN,
    page,
    limit,
  };
};

export const getPackageById = (id) => {
  return {
    type: types.GET_PACKAGE_ID_BEGIN,
    id,
  };
};

export const createPackage = (props) => {
  return {
    type: types.CREATE_PACKAGE_BEGIN,
    props,
  };
};


