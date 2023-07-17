import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  imgSrc: string;
  alt: string;
  description?: string;
}

export const ImageWithDescription: FC<Props> = ({
  imgSrc,
  alt,
  description,
}) => {
  return (
    <div className={styles['custom-image-wrapper']}>
      <img src={imgSrc} alt={alt} />
      {description && <p>{description}</p>}
    </div>
  );
};
