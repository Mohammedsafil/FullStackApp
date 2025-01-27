import React from 'react'
import './App.css'
import IndexPage from './pages/IndexPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
