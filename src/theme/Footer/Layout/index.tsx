import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Footer/Layout';
import styles from '../styles.module.scss';

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className={styles.container}>
        {logo && <div>{logo}</div>}
        {links}
      </div>
      {copyright}
    </footer>
  );
}
