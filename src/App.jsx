import DecorativeLayer from './sections/DecorativeLayer/DecorativeLayer'
import Header from './sections/Header/Header'
import Features from './sections/Features/Features'
import Services from './sections/Services/Services'
import Testimonials from './sections/Testimonials/Testimonials'
import Footer from './sections/Footer/Footer'

export default function App() {
  return (
    <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-white">
      <DecorativeLayer />
      <div className="relative z-10">
        <Header />
        <main>
          <Features />
          <Services />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  )
}
