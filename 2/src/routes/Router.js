import { Route, Routes } from "react-router-dom";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import PageContainer from "../pages/page/containers/PageContainer";
import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>This is home page!!!</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<PageContainer />} />
    </Routes>
  );
};

export default Router;
