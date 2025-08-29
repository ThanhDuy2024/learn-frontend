import './App.css'
import { AuthProvider } from './context/authContext';
import { Layout } from './Layout';
import { Login } from './pages/admin/auth/LoginForm'
import { BrowserRouter, Routes, Route } from "react-router";
import { Dashborad } from './pages/admin/dashboard/dashboard';
import { ProtectedAdmin } from './pages/admin/protected/protectedAdmin';
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

        <Route path='admin/dashboard' element={
          <AuthProvider>
            <ProtectedAdmin>
              <Dashborad/>
            </ProtectedAdmin>
          </AuthProvider>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
