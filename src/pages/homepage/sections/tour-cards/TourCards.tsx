import { Container, SectionHeading } from '../../../../components';
import { tourCards } from '../../../../data/destinations';
import styles from './TourCards.module.scss';

export function TourCards() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading title="Featured Tours" align="center" />
      <div className={styles.grid}>
        {tourCards.map((t) => (
          <article key={t.id} className={styles.card}>
            <img src={t.image} alt={t.title} loading="lazy" />
            <div className={styles.body}>
              <h3>{t.title}</h3>
              <p>{t.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
}
