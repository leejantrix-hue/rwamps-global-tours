import { Header } from './sections/header/Header';
import { Hero } from './sections/hero/Hero';
import { TourCards } from './sections/tour-cards/TourCards';
import { ReviewsBar } from './sections/reviews-bar/ReviewsBar';
import { ExplorePackages } from './sections/explore-packages/ExplorePackages';
import { PremiumDestinations } from './sections/premium-destinations/PremiumDestinations';
import { Services } from './sections/services/Services';
import { PopularDestinations } from './sections/popular-destinations/PopularDestinations';
import { MapSection } from './sections/map/MapSection';
import { WhyChooseUs } from './sections/why-choose-us/WhyChooseUs';
import { Stats } from './sections/stats/Stats';
import { Testimonials } from './sections/testimonials/Testimonials';
import { Faq } from './sections/faq/Faq';
import { NeedMoreHelp } from './sections/need-more-help/NeedMoreHelp';
import { StillHaveQuestions } from './sections/still-have-questions/StillHaveQuestions';
import { ContactForm } from './sections/contact-form/ContactForm';
import { Footer } from './sections/footer/Footer';

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
