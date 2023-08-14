import React, { FC } from 'react';
import style from './style.module.scss';

interface Props {
  method?: string;
  name?: string;
}

export const ApiMethod: FC<Props> = ({ method, name }) => {
  return (
    <h2 className={style.base}>
      {method && <span>{method}</span>} {name && <span>{name}</span>}
    </h2>
  );
};
