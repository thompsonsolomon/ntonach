import Navbar from "../components/common/Header"
import Footer from "../components/common/Footer"
import NtonarchHomeSections from "../components/Home/Hero"

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NtonarchHomeSections />
      <Footer />
    </div>
  )
}

export default LandingPage
