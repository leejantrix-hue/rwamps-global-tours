import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
variant?: 'elevated' | 'flat' | 'outlined';
padding?: 'none' | 'sm' | 'md' | 'lg';
hover?: boolean;
}

export function Card({
children,
variant = 'elevated',
padding = 'md',
hover = true,
className,
...rest
}: CardProps) {
const classes = [
  styles.card,
  styles[variant],
  styles[`padding-${padding}`],
  hover && styles.hoverable,
  className,
]
  .filter(Boolean)
  .join(' ');

return (
  <div className={classes} {...rest}>
    {children}
  </div>
);
}
