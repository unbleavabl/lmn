import { HashRouter, Route, Routes } from 'react-router-dom'

import { MainScreen } from 'renderer/screens'
import { Start } from './screens/Start'

export function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </HashRouter>
  )
}
