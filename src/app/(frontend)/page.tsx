import {
  AboutContainer,
  EventsContainer,
  GalleryContainer,
  HeaderContainer,
  ServicesContainer,
  TestimonialsContainer,
  TeamContainer,
  PartnersContainer,
  InsightsContainer,
  NavContainer,
} from '@/components/pages/home'
import Sidebar from '@/components/pages/home/nav/Sidebar'
// import { Footer } from '@/components/layout'
import { CustomCursor, SmoothScrolling } from '@/components/ui'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const Home = () => {
  return (
    <>
      <SmoothScrolling>
        <NavContainer />
        <HeaderContainer />
        <main>
          <AboutContainer />
          <EventsContainer />
          <GalleryContainer />
          <TestimonialsContainer />
          <PartnersContainer />
          <ServicesContainer />
          <TeamContainer />
          <InsightsContainer />
        </main>
        {/* <Footer /> */}
        <ScrollToTop />
      </SmoothScrolling>
      {/* <CustomCursor /> */}
    </>
  )
}

export default Home
