import React from 'react'
import './App.css'
import IndexPage from './pages/IndexPage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div>
      <div>
        <Link></Link>
      </div>
      <Router>
        <Routes>
        <Route path='/' element={<IndexPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
