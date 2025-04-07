import React, { useState } from 'react';
import Layout from './user/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './user/components/LandingPage';
import SignUp from './user/components/SignUp';
import SignIn from './user/components/SignIn';
import userRoutes from "./routes/userRoute";

function App() {
  const [status, setStatus] = useState(false)
  return (
    <div>
      <Routes>
        {!status && (
          <>
            <Route path='/' element = {<LandingPage />}/>
            <Route path='/sign-up' element = {<SignUp setStatus={setStatus}/>}/>
            <Route path='/sign-in' element = {<SignIn setStatus={setStatus}/>}/>
          </> 
        )}
        {status && (
            <Route path="/" element={<Layout />}>
            {userRoutes.map((route, index) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Route>
        )}
      </Routes>
    </div>
  )
}

export default App;

