import { FunctionComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Layout from "./components/Layout";
import CreateDepartment from "./pages/CreateDepartment";
import CreateEmployee from "./pages/CreateEmployee";
import CreateJobTitle from "./pages/CreateJobTitle";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import JobTitles from "./pages/JobTitles";
import OrgChartPage from "./pages/OrgChartPage";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ToastProvider autoDismiss={true}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <OrgChartPage />
            </Route>
            <Route exact path="/departments">
              <Departments />
            </Route>
            <Route path="/departments/create">
              <CreateDepartment />
            </Route>
            <Route exact path="/job-titles">
              <JobTitles />
            </Route>
            <Route path="/job-titles/create">
              <CreateJobTitle />
            </Route>
            <Route exact path="/employees">
              <Employees />
            </Route>
            <Route path="/employees/create">
              <CreateEmployee />
            </Route>
          </Switch>
        </Layout>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
