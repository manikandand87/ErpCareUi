import React, { Component } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home';
import Products from './Pages/Products';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './Pages/Reports';
import Overview from './Pages/Overview';
import Team from './Pages/Team';
import DynamicComponent from './Component/DynamicComponent';
import DynamicComponentsData from './Component/DynamicComponentsData';
import Form from './Pages/Login/Form';

export const SidebarData = [
  {
    path: '/',
    page: 'Home'
  }
]
function App() {
  let dynamicComponents = DynamicComponentsData;
  { console.log(dynamicComponents) } 
  return (
    <>
    <Form/>
      {/* <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Products" element={<Products />} />
          <Route path="Reports" />
          <Route path="Reports/reports1" element={<ReportsOne />} />
          <Route path="Reports/reports2" element={<ReportsTwo />} />
          <Route path="Reports/reports3" element={<ReportsThree />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="Team" element={<Team />} />         
        </Routes>
      </Router> */}
    </>);
}

export default App;
