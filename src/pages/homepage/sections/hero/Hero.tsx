import { Container, Button, SectionHeading } from '../../../../components';
import styles from './Hero.module.scss';

export function Hero() {
return (
  <section id="home" className={styles.hero}>
    <Container>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Discover Arabia"
          title="Your gateway to unforgettable journeys"
          subtitle="Curated tours, premium destinations, and expert guides — all in one place."
          align="center"
          inverse
        />
        <div className={styles.actions}>
          <Button size="lg" variant="primary">Explore Tours</Button>
          <Button size="lg" variant="outline">Watch Video</Button>
        </div>
      </div>
    </Container>
  </section>
);
}
