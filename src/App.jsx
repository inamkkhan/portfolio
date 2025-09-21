import { useState } from 'react'
import Home from './screens/Home/home'
import About from './screens/About/about'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './components/MainLayout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Contact from './screens/Contact/Contact';
import Portfolio from './screens/Portfolio/portfolio';
import Blog from './screens/Blogs/blog';
import AboutModal from './components/Modal/AboutModal';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout><Home /></MainLayout>} />
          {/* <Route path='about' element={<MainLayout><AboutModal/></MainLayout>}/> */}
          <Route path='about' element={<MainLayout><About isModal={false} /></MainLayout>} />
          <Route path='contact' element={<MainLayout><Contact /></MainLayout>} />
          <Route path='portfolio' element={<MainLayout><Portfolio /></MainLayout>} />
          <Route path='blog' element={<MainLayout><Blog /></MainLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>

  )
}

export default App