import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AndyNormorePage from './pages/AndyNormorePage'
import BecomeCivilCitizenPage from './pages/BecomeCivilCitizenPage'
import DonatePage from './pages/DonatePage'
import HomePage from './pages/HomePage'
import HumansInTheSingularityPage from './pages/HumansInTheSingularityPage'
import LeadershipPage from './pages/LeadershipPage'
import NewsUpdatesPage from './pages/NewsUpdatesPage'
import EconomicPolicyPage from './pages/EconomicPolicyPage'
import EconomicPolicyDetailPage from './pages/EconomicPolicyDetailPage'
import TheSystemPage from './pages/TheSystemPage'
import NavigationPlaceholderPage from './pages/NavigationPlaceholderPage'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/become-a-civil-citizen" element={<BecomeCivilCitizenPage />} />
        <Route path="/become-a-civil-citizens" element={<Navigate to="/become-a-civil-citizen" replace />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/leadership/andy-normore" element={<AndyNormorePage />} />
        <Route
          path="/about/leadership/andy-normore/humans-in-the-singularity"
          element={<HumansInTheSingularityPage />}
        />
        <Route path="/the-civil-app" element={<TheSystemPage />} />
        <Route path="/news-updates" element={<NewsUpdatesPage />} />
        <Route path="/support-ccc/donate" element={<DonatePage />} />
        <Route path="/support-ccc/partner-with-ccc" element={<Navigate to="/support-ccc" replace />} />
        <Route path="/the-system" element={<Navigate to="/the-civil-app" replace />} />
        <Route path="/the-system/what-is-civil" element={<Navigate to="/the-civil-app/what-is-civil" replace />} />
        <Route path="/the-system/how-citizens-participate" element={<Navigate to="/the-civil-app/how-citizens-participate" replace />} />
        <Route path="/the-system/chambers-of-citizens" element={<Navigate to="/the-civil-app/chambers-of-citizens" replace />} />
        <Route path="/the-system/economic-network" element={<Navigate to="/the-civil-app/economic-network" replace />} />
        <Route path="/the-system/governance-layer" element={<Navigate to="/the-civil-app/governance-layer" replace />} />
        <Route path="/the-system/civil-wallet" element={<Navigate to="/the-civil-app/civil-wallet" replace />} />
        <Route path="/civil-system" element={<Navigate to="/the-civil-app" replace />} />
        <Route path="/civil-system/what-is-civil" element={<Navigate to="/the-civil-app/what-is-civil" replace />} />
        <Route path="/civil-system/how-citizens-participate" element={<Navigate to="/the-civil-app/how-citizens-participate" replace />} />
        <Route path="/civil-system/chambers-of-citizens" element={<Navigate to="/the-civil-app/chambers-of-citizens" replace />} />
        <Route path="/civil-system/economic-network" element={<Navigate to="/the-civil-app/economic-network" replace />} />
        <Route path="/civil-system/governance-layer" element={<Navigate to="/the-civil-app/governance-layer" replace />} />
        <Route path="/civil-system/civil-wallet" element={<Navigate to="/the-civil-app/civil-wallet" replace />} />
        <Route path="/economic-policy" element={<EconomicPolicyPage />} />
        <Route path="/economic-policy/" element={<EconomicPolicyPage />} />
        <Route path="/economic-policy/:slug" element={<EconomicPolicyDetailPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/join-movement" element={<Navigate to="/become-a-civil-citizen" replace />} />
        <Route path="/economic-policy.html" element={<Navigate to="/economic-policy" replace />} />
        <Route path="*" element={<NavigationPlaceholderPage />} />
      </Routes>
    </SiteLayout>
  )
}
