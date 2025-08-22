import './App.css'
import { AuthProvider } from './context/authContext';
import { Layout } from './Layout';
import { Login } from './pages/admin/auth/LoginForm'
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='admin'>
            <Route path='login' element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
