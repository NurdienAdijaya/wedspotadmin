import { Route, Switch } from "react-router-dom";
import QuotationDetail from "./quotationDetail";
import Quotations from "./quotations";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Quotations/>
        </Route>
        <Route path="/quotes">
          <QuotationDetail/>
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
