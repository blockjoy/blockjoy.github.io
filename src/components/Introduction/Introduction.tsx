import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export const Introduction: FC<Props> = ({ children }) => {
  return (
    <div className={styles.introduction}>
      <p>{children}</p>
    </div>
  );
};
