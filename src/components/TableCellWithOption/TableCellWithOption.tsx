import React, { FC } from 'react';
import style from './style.module.scss';

interface Props {
  text: string;
  info: string;
}

export const TableCellWithOption: FC<Props> = ({ text, info }) => {
  return (
    <div className={style.base}>
      {text} <span className={style.info}>{info}</span>
    </div>
  );
};
