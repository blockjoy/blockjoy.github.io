import React, { FC } from 'react';
import style from './style.module.scss';

interface Props {
  text: string;
  info?: string;
  warning?: string;
  infoInFront?: string;
  warningInFront?: string;
}

export const TableCellWithOption: FC<Props> = ({
  text,
  info,
  warning,
  infoInFront,
  warningInFront,
}) => {
  return (
    <div className={style.base}>
      {warningInFront && (
        <span className={style.warning}>{warningInFront}</span>
      )}
      {infoInFront && <span className={style.info}>{infoInFront}</span>}
      <span>{text}</span>
      {warning && <span className={style.warning}>{warning}</span>}
      {info && <span className={style.info}>{info}</span>}{' '}
    </div>
  );
};
