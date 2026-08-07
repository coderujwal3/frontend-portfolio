import React, { Suspense } from 'react'
// import PortfolioEntry from './pages/PortfolioEntry'
import Hero from './pages/Hero'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
  )
}

export default App