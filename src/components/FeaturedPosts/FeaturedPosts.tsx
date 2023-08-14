import React, { FC } from 'react';
import styles from './styles.modules.scss';

interface Props {
  title: string;
  items: { title: string; description: string; path: string }[];
}

export const FeaturedPosts: FC<Props> = ({ title, items }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <ul className={styles['item-list']}>
        {items.map(({ title, description, path }, i) => (
          <li className={styles.item} key={i}>
            <a className={styles.item__link} href={path}>
              <p className={styles.item__title}>{title}</p>
              <p className={styles.item__description}>{description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
