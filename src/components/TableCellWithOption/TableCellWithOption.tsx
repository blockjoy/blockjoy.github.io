import React, { FC } from 'react';
import style from './style.module.scss';

interface Props {
  text: string;
  info?: string;
  warning?: string;
  isOneof?: boolean;
}

export const TableCellWithOption: FC<Props> = ({
  text,
  info,
  warning,
  isOneof,
}) => {
  return (
    <div className={style.base}>
      {isOneof && <span className={style.warning}>onef</span>}
      <span>{text}</span>
      {warning && <span className={style.warning}>{warning}</span>}
      {info && <span className={style.info}>{info}</span>}{' '}
    </div>
  );
};
