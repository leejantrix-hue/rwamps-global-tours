import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Container, Button } from '../../../../components';
import { navLinks, siteConfig } from '../../../../data/site';
import styles from './Header.module.scss';

export function Header() {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);

return (
  <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
    <Container>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>
          <img src={siteConfig.logo} alt={siteConfig.name} />
        </a>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className={styles.callLink}>
            <Phone size={16} />
            <span>{siteConfig.phone}</span>
          </a>
          <Button size="sm" variant="primary">
            Book Now
          </Button>
          <button
            className={styles.menuToggle}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </Container>
  </header>
);
}
