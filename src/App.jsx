import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SpecialNeeds from './pages/SpecialNeeds'
import Portal from './pages/Portal'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/special-needs" element={<SpecialNeeds />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
