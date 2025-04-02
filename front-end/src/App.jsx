import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./user/Layout/Layout";
import userRoutes from "./routes/userRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {userRoutes.map((route, index) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
