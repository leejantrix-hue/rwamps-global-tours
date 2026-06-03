import { Header } from './sections/header/Header';
import { Hero } from './sections/hero/Hero';
import { TourCards } from './sections/tour-cards/TourCards';
import {
ReviewsBar,
ExplorePackages,
PremiumDestinations,
Services,
PopularDestinations,
MapSection,
WhyChooseUs,
Stats,
Testimonials,
Faq,
NeedMoreHelp,
StillHaveQuestions,
ContactForm,
Footer,
} from './sections/_stubs';

export default function HomePage() {
return (
  <>
    <Header />
    <main>
      <Hero />
      <TourCards />
      <ReviewsBar />
      <ExplorePackages />
      <PremiumDestinations />
      <Services />
      <PopularDestinations />
      <MapSection />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Faq />
      <NeedMoreHelp />
      <StillHaveQuestions />
      <ContactForm />
    </main>
    <Footer />
  </>
);
}
