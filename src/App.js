import React from 'react'
import './App.css'
import IndexPage from './pages/IndexPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/' element={<IndexPage />} />
      </Router>
    </div>
  )
}

export default App
