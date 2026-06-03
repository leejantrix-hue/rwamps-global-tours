import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
children: ReactNode;
variant?: Variant;
size?: Size;
fullWidth?: boolean;
iconLeft?: ReactNode;
iconRight?: ReactNode;
}

export function Button({
children,
variant = 'primary',
size = 'md',
fullWidth = false,
iconLeft,
iconRight,
className,
...rest
}: ButtonProps) {
const classes = [
  styles.button,
  styles[variant],
  styles[size],
  fullWidth && styles.fullWidth,
  className,
]
  .filter(Boolean)
  .join(' ');

return (
  <button className={classes} {...rest}>
    {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
    <span>{children}</span>
    {iconRight && <span className={styles.icon}>{iconRight}</span>}
  </button>
);
}
