import {
  AboutContainer,
  EventsContainer,
  GalleryContainer,
  HeaderContainer,
  InsightsContainer,
  NavContainer,
  PartnersContainer,
  ServicesContainer,
  SpaceContainter,
  TeamContainer,
  TestimonialsContainer,
} from '@/components/pages/home'
import { SmoothScrolling } from '@/components/ui'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const Home = () => {
  return (
    <>
      <SmoothScrolling>
        <NavContainer />
        <HeaderContainer />
        <main>
          <SpaceContainter />
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
