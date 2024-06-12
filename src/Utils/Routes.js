import AssesmentPage from "../components/Molecule/AssesmentPage";
import MultiStepForm from "../components/Molecule/CompleteStepForm/multiStepform";
import Dashboardpage from "../components/Molecule/DashboardPage";
import ReportsPage from "../components/Molecule/ReportsPage";
import MyComponent from "../components/Pages/Page 1";
import WithNav from "../components/Routes/WithNav";
import WithOutNav from "../components/Routes/WithOutNav";

const routes = [
  { path: "/", element: <MyComponent />, nav: false },
  { path: "/dashboard", element: <Dashboardpage />, nav: true },
  { path: "/assessment", element: <AssesmentPage />, nav: true },
  { path: "/reports", element: <ReportsPage />, nav: true },
  { path: "/stepForm", element: <MultiStepForm />, nav: true },
];

export default routes;
