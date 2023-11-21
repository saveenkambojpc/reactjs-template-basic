import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PrivateOutlet from "./routes/PrivateOutlet";
import Error from "./pages/Error";
import Logs from "./pages/Logs";
import Report from "./pages/Report";
import { ROUTES } from "./routes/routes";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />

        <Route path={ROUTES.error} element={<Error />} />

        <Route path={ROUTES.dashboard} element={<PrivateOutlet />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path={ROUTES.logs} element={<PrivateOutlet />}>
          <Route path="" element={<Logs />} />
        </Route>
        <Route path={ROUTES.reports} element={<PrivateOutlet />}>
          <Route path="" element={<Report />} />
        </Route>
        <Route path={ROUTES.users} element={<PrivateOutlet />}>
          <Route path="" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
