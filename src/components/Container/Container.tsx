import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
children: ReactNode;
size?: 'sm' | 'md' | 'lg' | 'full';
}

export function Container({ children, size = 'lg', className, ...rest }: ContainerProps) {
const classes = [styles.container, styles[size], className].filter(Boolean).join(' ');
return (
  <div className={classes} {...rest}>
    {children}
  </div>
);
}
