import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import DashbordLayout from './components/DashbordLayout'
import Home from './pages/Home';
import headphone from './img/headphone 1.png';
import Auth from './pages/Auth';
import useAuthStore from './store/Authstore';
import './App.scss'
import './variables.scss'
import { useEffect } from 'react';

function App() {
  
  const authenticated = useAuthStore((state) => state.authenticated);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      useAuthStore.setState({ authenticated: true })
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={authenticated?<Navigate to="../" />:<Auth/>} /> 
        <Route path='/' element={authenticated?<DashbordLayout />:<Navigate to="../auth" />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <img className='headphone' src={headphone} alt='headphone'/>
      <Toaster/>
    </div>
  )
}

export default App
