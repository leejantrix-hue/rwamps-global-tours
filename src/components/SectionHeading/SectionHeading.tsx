import type { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
eyebrow?: string;
title: ReactNode;
subtitle?: string;
align?: 'left' | 'center';
inverse?: boolean;
}

export function SectionHeading({
eyebrow,
title,
subtitle,
align = 'center',
inverse = false,
}: SectionHeadingProps) {
const classes = [
  styles.heading,
  styles[align],
  inverse && styles.inverse,
]
  .filter(Boolean)
  .join(' ');

return (
  <div className={classes}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);
}
