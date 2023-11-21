import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import PrivateOutlet from "./routes/PrivateOutlet";
import Error from "./pages/Error";
import { ROUTES } from "./routes/routes";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.login} element={<Login />} />

        <Route path={ROUTES.error} element={<Error />} />


        <Route path={ROUTES.users} element={<PrivateOutlet />}>
          <Route path="" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
