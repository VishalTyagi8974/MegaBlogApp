import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import authService from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setIsLoading(false))
  }, [])



  return (
    <>

      {isLoading ? <h2>Loading</h2> :
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>


      }

    </>
  )
}

export default App
