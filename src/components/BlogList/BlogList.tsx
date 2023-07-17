import { Blog } from '@site/src/models';
import React, { FC } from 'react';
import { BlogCard } from './BlogCard';

import styles from './styles.module.scss';

interface Props {
  blogs: Blog[];
}

export const BlogList: FC<Props> = ({ blogs }) => {
  return (
    <div className={styles['blog-card-list']}>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}>
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
};
