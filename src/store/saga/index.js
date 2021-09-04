import { all } from "@redux-saga/core/effects";
import { watchLogin, watchRegister, watchGetVendor } from "./auth";

export default function* rootSaga() {
  // function generator
  yield all([
    watchLogin(),
    watchRegister(),
    watchGetVendor(),
  ]);
}
