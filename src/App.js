import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AllRoutes } from "./routes/index";
import { AuthProviders } from "./Context/AuthProviders";
import PersonaLayout from "./Layout/PersonaLayout/PersonaLayout";

const App = () => {
  return (
    <AuthProviders>
      <Router>
        <Routes>
          {AllRoutes.map((route, index) => {
            let Layout = PersonaLayout;
            if (route.Layout) Layout = route.Layout;
            else Layout = PersonaLayout;

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </AuthProviders>
  );
};

export default App;
