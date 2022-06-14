import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LoadingBar from '../node_modules/react-top-loading-bar'


const App = () => {

  const apiKey = "efd8236e0ce542f1ac7f3eea9fc7a174"
  
  const[progress,setProgress] = useState(0)

  
  const pageSize = 10

  
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height = '3px'
      />
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "general"/>}/>
          <Route path='/business' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "business"/>}/>
          <Route path='/entertainment' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "entertainment"/>}/>
          <Route path='/health' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "health"/>}/>
          <Route path='/sports' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "sports"/>}/>
          <Route path='/science' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "science"/>}/>
          <Route path='/technology' element={<News setProgress={setProgress}  apiKey = {apiKey} pageSize = {pageSize} country = "in" category = "technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
    }
    export default App
