import { Route, Switch } from "react-router-dom";
import PackageDetail from "./packageDetail";
import PackageList from "./packageList";
import NewPackages from "./NewPackages";

const QuotationsRouters = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PackageList />
        </Route>
        <Route path="/package/:id">
          <PackageDetail />
        </Route>
        <Route path="/package/new">
          <NewPackages />
        </Route>
        <Route path="/package/edit/:id">
          <NewPackages />
        </Route>
      </Switch>
    </>
  );
};

export default QuotationsRouters;
