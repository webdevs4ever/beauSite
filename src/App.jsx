import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SpecialNeeds from './pages/SpecialNeeds'
import Portal from './pages/Portal'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/special-needs" element={<SpecialNeeds />} />
      <Route path="/portal" element={<Portal />} />
    </Routes>
  )
}
