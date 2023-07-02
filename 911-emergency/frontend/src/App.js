import React from 'react';
import SearchHospitals from './pages/SearchHospitals';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Foot from './components/Foot';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/search' element={<SearchHospitals/>}/>
     <Route path='/user' element={<OnboardingPage/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
  );
}

export default App;
