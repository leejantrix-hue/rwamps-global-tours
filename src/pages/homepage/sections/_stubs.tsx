import { Container, SectionHeading, Button, Card } from '../../../components';
import { Star, Search } from 'lucide-react';
import { destinations, popularDestinations } from '../../../data/destinations';
import { services } from '../../../data/services';
import { testimonials, stats } from '../../../data/testimonials';
import { faqs, whyChooseUs } from '../../../data/faqs';
import { siteConfig, footerGroups, supportChannels } from '../../../data/site';
import styles from './_stubs.module.scss';

// 1. Reviews bar
export function ReviewsBar() {
return (
  <section className={styles.section} style={{ paddingTop: 32, paddingBottom: 32, background: '#FFF7E6' }}>
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <Star size={24} fill="#F59E0B" color="#F59E0B" />
        <strong>{siteConfig.rating}/5</strong>
        <span>· {siteConfig.reviewCount}+ verified reviews</span>
      </div>
    </Container>
  </section>
);
}

// 2. Explore packages
export function ExplorePackages() {
return (
  <section id="tours" className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Packages" title="Explore Our Travel Packages" subtitle="Search and filter through hundreds of tailored experiences." />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <input type="text" placeholder="Destination" style={{ padding: '12px 16px', border: '1px solid #E5E7EB', borderRadius: 999, minWidth: 220 }} />
        <input type="date" style={{ padding: '12px 16px', border: '1px solid #E5E7EB', borderRadius: 999 }} />
        <Button variant="primary" iconLeft={<Search size={16} />}>Search</Button>
      </div>
    </Container>
  </section>
);
}

// 3. Premium destinations
export function PremiumDestinations() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Premium Destinations" title="8 Cities, Endless Memories" />
      <div className={styles.grid}>
        {destinations.map((d) => (
          <Card key={d.id} padding="none">
            <img src={d.image} alt={d.name} loading="lazy" className={styles.cardImage} />
            <div className={styles.body}>
              <h3>{d.name}, {d.country}</h3>
              <p>{d.description}</p>
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>${d.price}</strong>
                <span>★ {d.rating}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);
}

// 4. Services
export function Services() {
return (
  <section id="services" className={`${styles.section} ${styles.dark}`}>
    <Container>
      <SectionHeading eyebrow="What We Offer" title="Our Services" inverse />
      <div className={styles.grid}>
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.id} variant="flat">
              <Icon size={40} />
              <h3 style={{ marginTop: 16 }}>{s.title}</h3>
              <p>{s.description}</p>
            </Card>
          );
        })}
      </div>
    </Container>
  </section>
);
}

// 5. Popular destinations
export function PopularDestinations() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Trending" title="Popular Destinations" />
      <div className={styles.grid}>
        {popularDestinations.map((p) => (
          <Card key={p.id} padding="none">
            <img src={p.image} alt={p.name} loading="lazy" className={styles.cardImage} />
            <div className={styles.body}>
              <h3>{p.name}</h3>
              <p>{p.category}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);
}

// 6. Map
export function MapSection() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Find Us" title="Visit Our Office" subtitle={siteConfig.address.full} />
      <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        <iframe
          title="Office location"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=55.13%2C25.07%2C55.15%2C25.09&layer=mapnik&marker=25.0808%2C55.1403"
          loading="lazy"
        />
      </div>
    </Container>
  </section>
);
}

// 7. Why Choose Us
export function WhyChooseUs() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Why Choose Us" title="The Rwamps Difference" />
      <div className={styles.grid}>
        {whyChooseUs.map((w) => {
          const Icon = w.icon;
          return (
            <Card key={w.id}>
              <Icon size={40} />
              <h3 style={{ marginTop: 16 }}>{w.title}</h3>
              <p>{w.description}</p>
            </Card>
          );
        })}
      </div>
    </Container>
  </section>
);
}

// 8. Stats
export function Stats() {
return (
  <section className={`${styles.section} ${styles.dark}`}>
    <Container>
      <div className={styles.grid}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.id} style={{ textAlign: 'center' }}>
              <Icon size={40} />
              <div style={{ fontSize: 48, fontWeight: 700, marginTop: 12 }}>{s.value}</div>
              <div>{s.label}</div>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);
}

// 9. Testimonials
export function Testimonials() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Reviews" title="What Travelers Say" />
      <div className={styles.grid3}>
        {testimonials.map((t) => (
          <Card key={t.id}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p style={{ marginBottom: 16, fontStyle: 'italic' }}>"{t.quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <strong>{t.name}</strong>
                <div style={{ fontSize: 14, color: '#6B7280' }}>{t.role}, {t.company}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);
}

// 10. FAQ
export function Faq() {
return (
  <section id="faqs" className={styles.section}>
    <Container>
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map((f) => (
          <details key={f.id} style={{ background: '#F9FAFB', borderRadius: 12, padding: 16 }}>
            <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{f.question}</summary>
            <p style={{ marginTop: 12, color: '#4B5563' }}>{f.answer}</p>
          </details>
        ))}
      </div>
    </Container>
  </section>
);
}

// 11. Need more help
export function NeedMoreHelp() {
return (
  <section className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Support" title="Need More Help?" subtitle="Our team is here for you, 24/7." />
      <div className={styles.grid3}>
        {supportChannels.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.id}>
              <Icon size={40} />
              <h3 style={{ marginTop: 16 }}>{c.title}</h3>
              <p>{c.description}</p>
              <div style={{ marginTop: 12, fontSize: 14, color: '#6B7280' }}>{c.availability}</div>
              <Button variant="outline" size="sm" style={{ marginTop: 16 }}>{c.cta}</Button>
            </Card>
          );
        })}
      </div>
    </Container>
  </section>
);
}

// 12. Still have questions (CTA strip)
export function StillHaveQuestions() {
return (
  <section className={`${styles.section} ${styles.dark}`} style={{ padding: '64px 0' }}>
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, marginBottom: 16, color: '#fff' }}>Still Have Questions?</h2>
        <p style={{ marginBottom: 24, color: 'rgba(255,255,255,0.85)' }}>Get in touch with our team today.</p>
        <Button variant="primary" size="lg">Contact Us</Button>
      </div>
    </Container>
  </section>
);
}

// 13. Contact form
export function ContactForm() {
return (
  <section id="contact" className={styles.section}>
    <Container>
      <SectionHeading eyebrow="Contact" title="Get In Touch" />
      <form style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input type="text" placeholder="Your name" required style={{ padding: 12, border: '1px solid #E5E7EB', borderRadius: 8 }} />
        <input type="email" placeholder="Your email" required style={{ padding: 12, border: '1px solid #E5E7EB', borderRadius: 8 }} />
        <input type="text" placeholder="Subject" style={{ padding: 12, border: '1px solid #E5E7EB', borderRadius: 8 }} />
        <textarea placeholder="Your message" rows={5} required style={{ padding: 12, border: '1px solid #E5E7EB', borderRadius: 8, resize: 'vertical' }} />
        <Button type="submit" variant="primary" size="lg">Send Message</Button>
      </form>
    </Container>
  </section>
);
}

// 14. Footer
export function Footer() {
return (
  <footer className={styles.dark} style={{ padding: '64px 0 32px' }}>
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, marginBottom: 48 }}>
        <div>
          <img src={siteConfig.logo} alt={siteConfig.name} style={{ height: 40, marginBottom: 16, filter: 'brightness(0) invert(1)' }} />
          <p style={{ color: 'rgba(255,255,255,0.85)' }}>{siteConfig.address.short}</p>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>{siteConfig.phone}</p>
        </div>
        {footerGroups.map((g) => (
          <div key={g.title}>
            <h4 style={{ color: '#fff', marginBottom: 16 }}>{g.title}</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {g.links.map((l) => (
                <li key={l.label}><a href={l.href} style={{ color: 'rgba(255,255,255,0.85)' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
        © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
      </div>
    </Container>
  </footer>
);
}
