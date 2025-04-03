import React from 'react';
import Layout from './user/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './user/components/LandingPage';
import SignUp from './user/components/SignUp';
import SignIn from './user/components/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/sign-up' element = {<SignUp />}/>
        <Route path='/sign-in' element = {<SignIn />}/>
        <Route path='/home' element = {<Layout />}/>
      </Routes>
    </div>
  )
}

export default App
