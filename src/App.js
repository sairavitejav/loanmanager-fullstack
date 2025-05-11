import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserDashboard from './components/UserDashboard'
import VerifierDashboard from './components/VerifierDashboard'
import AdminDashboard from './components/AdminDashboard'
import LoanApplication from './components/LoanApplication'
import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<UserDashboard />} />
    <Route path="/verifier" element={<VerifierDashboard />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/loan-application" element={<LoanApplication />} />
  </Routes>
  </BrowserRouter>

)
export default App