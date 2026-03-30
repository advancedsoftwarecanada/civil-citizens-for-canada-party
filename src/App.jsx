import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import EconomicPolicyPage from './pages/EconomicPolicyPage'
import EconomicPolicyDetailPage from './pages/EconomicPolicyDetailPage'
import NavigationPlaceholderPage from './pages/NavigationPlaceholderPage'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/economic-policy" element={<EconomicPolicyPage />} />
        <Route path="/economic-policy/" element={<EconomicPolicyPage />} />
        <Route path="/economic-policy/:slug" element={<EconomicPolicyDetailPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/economic-policy.html" element={<Navigate to="/economic-policy" replace />} />
        <Route path="*" element={<NavigationPlaceholderPage />} />
      </Routes>
    </SiteLayout>
  )
}
