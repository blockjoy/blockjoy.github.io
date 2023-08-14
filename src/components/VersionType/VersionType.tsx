import React, { FC, ReactNode } from 'react';
import styles from './style.module.scss';

interface Props {
  children: ReactNode;
}

export const VersionType: FC<Props> = ({ children }) => {
  return (
    <p className={styles.base}>
      <span>{children}</span>
    </p>
  );
};
