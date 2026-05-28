import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import SpecialNeeds from './pages/SpecialNeeds'
import Portal from './pages/Portal'
import Bios from './pages/Bios'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      {/* Marketing pages — wrapped with Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Standalone pages — own layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/special-needs" element={<SpecialNeeds />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/bios" element={<Bios />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
