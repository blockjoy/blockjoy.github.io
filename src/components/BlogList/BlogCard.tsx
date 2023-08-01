import { Blog } from '@site/src/models';
import React, { FC } from 'react';
import Arrow from '@site/static/img/arrow-right-green.svg';

import styles from './styles.module.scss';

interface Props {
  blog: Blog;
}

export const BlogCard: FC<Props> = ({ blog }) => {
  return (
    <a className={styles['blog-card']} href={`/blog/${blog.path}`}>
      <div className={styles['blog-card-name-wrapper']}>
        <h3 className={styles['blog-card-name']}>{blog.name}</h3>
        <Arrow />
      </div>
      <p className={styles['blog-card-description']}>{blog.description}</p>
    </a>
  );
};
