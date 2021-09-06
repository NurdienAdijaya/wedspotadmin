import { all } from "@redux-saga/core/effects";
import { watchLogin, watchRegister, watchGetVendor } from "./auth";
import { watchAllQuotations, watchQuotationsById } from "./quotations";
import { watchAllPackage, watchPackageById } from "./package";

export default function* rootSaga() {
  // function generator
  yield all([
    watchLogin(),
    watchRegister(),
    watchGetVendor(),
    watchAllQuotations(),
    watchQuotationsById(),
    watchAllPackage(),
    watchPackageById(),
  ]);
}
