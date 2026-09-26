import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';

import { PublicLayout } from './layouts/PublicLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

import { LandingPage } from './pages/LandingPage';
import { JudgmentsPage } from './pages/JudgmentsPage';
import { JudgmentDetailPage } from './pages/JudgmentDetailPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { CounselPage } from './pages/CounselPage';
import { CounselDetailPage } from './pages/CounselDetailPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AdminPage } from './pages/AdminPage';

import { DashboardOverviewPage } from './pages/dashboard/DashboardOverviewPage';
import { DashboardJudgmentsPage } from './pages/dashboard/DashboardJudgmentsPage';
import { DashboardNewsPage } from './pages/dashboard/DashboardNewsPage';
import { DashboardCounselPage } from './pages/dashboard/DashboardCounselPage';
import { DashboardBookmarksPage } from './pages/dashboard/DashboardBookmarksPage';
import { DashboardProfilePage } from './pages/dashboard/DashboardProfilePage';
import { DashboardSettingsPage } from './pages/dashboard/DashboardSettingsPage';

export function App() {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <BrowserRouter>
          <Routes>
            {/* PUBLIC WEBSITE ROUTES */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="judgments" element={<JudgmentsPage />} />
              <Route path="judgments/:id" element={<JudgmentDetailPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id" element={<NewsDetailPage />} />
              <Route path="counsel" element={<CounselPage />} />
              <Route path="counsel/:id" element={<CounselDetailPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="admin" element={<AdminPage />} />
            </Route>

            {/* APPLICATION DASHBOARD ROUTES */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverviewPage />} />
              <Route path="judgments" element={<DashboardJudgmentsPage />} />
              <Route path="news" element={<DashboardNewsPage />} />
              <Route path="counsel" element={<DashboardCounselPage />} />
              <Route path="bookmarks" element={<DashboardBookmarksPage />} />
              <Route path="profile" element={<DashboardProfilePage />} />
              <Route path="settings" element={<DashboardSettingsPage />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </BookmarkProvider>
    </AuthProvider>
  );
}

export default App;
