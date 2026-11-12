import React from 'react'
import Navbar from '../components/common/Header'
import Footer from '../components/common/Footer'
import Careers from '../components/Career/Careers'
import RemoteCareers from '../components/Career/RemoteCareers'
import OngroundCareers from '../components/Career/OngroundCareer'
import HybridCareers from '../components/Career/HybridCareer'

function CareersPage() {
  return (
    <div>
      <Navbar />
      <Careers />
      <Footer />
    </div>)
}

export default CareersPage


export function RemoteCareersPage() {
  return (
    <div>
      <Navbar />
      <RemoteCareers />
      <Footer />
    </div>
  )
}


export function OngroundCareersPage() {
  return (
    <div>
      <Navbar />
      <OngroundCareers />
      <Footer />
    </div>
  )
}


export function HybridCareersPage() {
  return (
    <div>
      <Navbar />
      <HybridCareers />
      <Footer />
    </div>
  )
}
