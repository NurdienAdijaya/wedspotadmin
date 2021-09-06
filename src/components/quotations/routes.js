import { Route, Switch } from "react-router-dom";
import QuotationDetail from "./quotationDetail";
import Quotations from "./quotations";

const QuotationsRouters = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Quotations/>
        </Route>
        <Route path="/quotes">
          <QuotationDetail/>
        </Route>
        <Route path="/quotes">
        </Route>
      </Switch>
    </>
  );
};

export default QuotationsRouters;
