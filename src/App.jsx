import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AndyNormorePage from './pages/AndyNormorePage'
import AboutPage from './pages/AboutPage'
import AgricultureFoodPage from './pages/AgricultureFoodPage'
import BecomeCivilCitizenPage from './pages/BecomeCivilCitizenPage'
import CivilWalletFundingPage from './pages/CivilWalletFundingPage'
import CandidateSelectionPage from './pages/CandidateSelectionPage'
import DigitalGovernancePage from './pages/DigitalGovernancePage'
import DefenseSovereigntyPage from './pages/DefenseSovereigntyPage'
import DonatePage from './pages/DonatePage'
import EnergyInfrastructurePage from './pages/EnergyInfrastructurePage'
import FamilySocietyPage from './pages/FamilySocietyPage'
import FoundingPrinciplesPage from './pages/FoundingPrinciplesPage'
import GovernancePage from './pages/GovernancePage'
import HomePage from './pages/HomePage'
import ImmigrationPage from './pages/ImmigrationPage'
import CivilChambersPage from './pages/CivilChambersPage'
import HumansInTheSingularityPage from './pages/HumansInTheSingularityPage'
import LeadershipPage from './pages/LeadershipPage'
import MemberGrowthPage from './pages/MemberGrowthPage'
import MpAccountabilityPage from './pages/MpAccountabilityPage'
import NationalDiscussionsPage from './pages/NationalDiscussionsPage'
import NewsUpdatesPage from './pages/NewsUpdatesPage'
import PlatformPage from './pages/PlatformPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import RestoringPowerPage from './pages/RestoringPowerPage'
import RoadmapPage from './pages/RoadmapPage'
import TechnologyAIPage from './pages/TechnologyAIPage'
import EconomicPolicyPage from './pages/EconomicPolicyPage'
import EconomicPolicyDetailPage from './pages/EconomicPolicyDetailPage'
import SupportPage from './pages/SupportPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import TheSystemPage from './pages/TheSystemPage'
import TrustSafetyPage from './pages/TrustSafetyPage'
import NavigationPlaceholderPage from './pages/NavigationPlaceholderPage'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/become-a-civil-citizen" element={<BecomeCivilCitizenPage />} />
        <Route path="/become-a-civil-citizens" element={<Navigate to="/become-a-civil-citizen" replace />} />
        <Route path="/about-ccc" element={<Navigate to="/about" replace />} />
        <Route path="/about/founding-principles" element={<FoundingPrinciplesPage />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/leadership/andy-normore" element={<AndyNormorePage />} />
        <Route
          path="/about/leadership/andy-normore/humans-in-the-singularity"
          element={<HumansInTheSingularityPage />}
        />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/platform/agriculture-food" element={<AgricultureFoodPage />} />
        <Route path="/platform/defense-sovereignty" element={<DefenseSovereigntyPage />} />
        <Route path="/platform/energy-infrastructure" element={<EnergyInfrastructurePage />} />
        <Route path="/platform/family-society" element={<FamilySocietyPage />} />
        <Route path="/platform/technology-ai" element={<TechnologyAIPage />} />
        <Route path="/platform/governance" element={<GovernancePage />} />
        <Route path="/platform/implementation" element={<Navigate to="/platform#platform-implementation" replace />} />
        <Route path="/platform/implementation/civil-chambers" element={<Navigate to="/platform/implementation/chambers-of-citizens" replace />} />
        <Route path="/platform/implementation/chambers-of-citizens" element={<CivilChambersPage />} />
        <Route path="/platform/implementation/candidate-selection" element={<CandidateSelectionPage />} />
        <Route path="/platform/implementation/civil-wallet" element={<CivilWalletFundingPage />} />
        <Route path="/platform/implementation/digital-governance" element={<DigitalGovernancePage />} />
        <Route path="/platform/implementation/member-growth" element={<MemberGrowthPage />} />
        <Route path="/platform/implementation/mp-accountability" element={<MpAccountabilityPage />} />
        <Route path="/platform/implementation/technology" element={<Navigate to="/platform#platform-implementation" replace />} />
        <Route path="/platform/implementation/trust-safety" element={<TrustSafetyPage />} />
        <Route path="/civil-chambers" element={<Navigate to="/platform/implementation/chambers-of-citizens" replace />} />
        <Route path="/platform/implementation/roadmap" element={<RoadmapPage />} />
        <Route path="/platform/implementation/restoring-power-to-citizens" element={<RestoringPowerPage />} />
        <Route path="/platform/immigration" element={<ImmigrationPage />} />
        <Route path="/national-discussions" element={<NationalDiscussionsPage />} />
        <Route path="/support-ccc" element={<SupportPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
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
        <Route path="/platform/economic-foundation" element={<EconomicPolicyPage />} />
        <Route path="/platform/economic-foundation/" element={<EconomicPolicyPage />} />
        <Route path="/economic-policy" element={<Navigate to="/platform/economic-foundation" replace />} />
        <Route path="/economic-policy/" element={<Navigate to="/platform/economic-foundation" replace />} />
        <Route
          path="/economic-policy/bigger-paycheques-not-bigger-deductions"
          element={<Navigate to="/platform/economic-foundation/no-more-stealth-taxes" replace />}
        />
        <Route
          path="/economic-policy/tax-transparency-for-the-common-citizen"
          element={<Navigate to="/platform/economic-foundation/build-a-system-that-works-for-citizens" replace />}
        />
        <Route path="/economic-policy/:slug" element={<EconomicPolicyLegacyRedirect />} />
        <Route path="/platform/economic-foundation/:slug" element={<EconomicPolicyDetailPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/join-movement" element={<Navigate to="/become-a-civil-citizen" replace />} />
        <Route path="/economic-policy.html" element={<Navigate to="/platform/economic-foundation" replace />} />
        <Route path="*" element={<NavigationPlaceholderPage />} />
      </Routes>
    </SiteLayout>
  )
}

function EconomicPolicyLegacyRedirect() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/platform/economic-foundation" replace />
  }

  return <Navigate to={`/platform/economic-foundation/${slug}`} replace />
}
