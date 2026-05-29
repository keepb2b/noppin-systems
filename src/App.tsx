import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n'
import { EntranceProvider } from './context/EntranceContext'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { StrengthsPage } from './pages/StrengthsPage'
import { ServicesPage } from './pages/ServicesPage'
import { FeePage } from './pages/FeePage'
import { FAQPage } from './pages/FAQPage'
import { WorksPage } from './pages/WorksPage'
import { AnimationPage } from './pages/AnimationPage'
import { BlogPage } from './pages/BlogPage'
import { StaffPage } from './pages/StaffPage'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <LanguageProvider>
      <EntranceProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="strengths" element={<StrengthsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="fee" element={<FeePage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="works" element={<WorksPage />} />
              <Route path="animation" element={<AnimationPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="staff" element={<StaffPage />} />
              <Route path="company" element={<CompanyPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </EntranceProvider>
    </LanguageProvider>
  )
}
