import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import LoadingSpinner from "./components/common/LoadingSpinner"
import ProtectedRoute from "./components/common/ProtectedRoute"
import Payment from "./components/CashFlow/Payment"
import { DashCam } from "./components/Sections/DashCam"
import PaymentVerification from "./components/CashFlow/ValidatePayment"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FAQ from "./components/Sections/FAQ"
import CareersPage, { HybridCareersPage, OngroundCareersPage, RemoteCareersPage } from "./pages/CareersPage"
import MediaPage from "./pages/MediaPage"
import MarketPage from "./pages/MarketPage"
import FarmPage from "./pages/FarmPage"
import ComputerPage from "./pages/ComputerPage"
import EngineeringPage from "./pages/EngineeringPage"
import EventPage from "./pages/EventPage"
import PropertiesPage from "./pages/PropertiesPage"
import WastePage from "./pages/WastePage"
import CateringPage from "./pages/CateringPage"
import FoundationPage from "./pages/FoundationPage"
// import ProfilePage from "./components/common/Profile"

// Lazy load components for better performance
const LandingPage = lazy(() => import("./pages/LandingPage"))
const LoginPage = lazy(() => import("./Auth/LoginPage"))
const RegisterPage = lazy(() => import("./Auth/RegisterPage"))
const ForgotPin = lazy(() => import("./Auth/ForgotPin"))
const ResetPin = lazy(() => import("./Auth/ResetPin"))
const ProfilePage = lazy(() => import("./components/common/Profile"))
const CustomerDashboard = lazy(() => import("./components/CustomerDashboard"))
const MechanicDashboard = lazy(() => import("./components/MechanicDashboard"))
const AdminDashboard = lazy(() => import("./components/AdminDashboard"))
const MapPage = lazy(() => import("./pages/MapPage"))
const NotFound = lazy(() => import("./pages/NotFound"))


function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black text-white">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/career" element={<CareersPage />} />
            <Route path="/career-remote" element={<RemoteCareersPage />} />
            <Route path="/career-onground" element={<OngroundCareersPage />} />
            <Route path="/career-hybrid" element={<HybridCareersPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/farm" element={<FarmPage />} />
            <Route path="/computer" element={<ComputerPage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/wastes" element={<WastePage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/foundation" element={<FoundationPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-pin" element={<ForgotPin />} />
            <Route path="/reset-pin" element={<ResetPin />} />
            <Route path="/elisoft" element={<DashCam />} />


            <Route
              path="/Customer"
              element={
                <ProtectedRoute allowedRoles={["Customer"]}>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/Mechanic"
              element={
                <ProtectedRoute allowedRoles={["Mechanic"]}>
                  <MechanicDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["Admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/map"
              element={
                <ProtectedRoute allowedRoles={["Customer", "Mechanic", "admin"]}>
                  <MapPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={["Customer", "Mechanic"]}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/payment"
              element={
                <ProtectedRoute allowedRoles={["Customer", "Mechanic"]}>
                  <Payment />
                </ProtectedRoute>
              }
            />

            <Route
              path="/verify-payment"
              element={
                <ProtectedRoute allowedRoles={["Customer", "Mechanic"]}>
                  <PaymentVerification />
                </ProtectedRoute>
              }
            />



            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </AuthProvider>
  )
}

export default App
