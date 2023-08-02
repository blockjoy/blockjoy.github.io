import React, { FC, ReactNode, useState } from 'react';
import Arrow from '@site/static/img/greater.svg';
import style from './style.module.scss';

interface Props {
  items: (string | ReactNode)[];
  rowCounter?: number;
  children?: ReactNode;
}

export const TableBodyRow: FC<Props> = ({
  items,
  children,
  rowCounter = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDropdownCell = (index: number) => children && index === 0;

  return (
    <>
      <tr>
        {items?.map((item, i) => (
          <td
            className={isDropdownCell(i) ? style.cellClickable : undefined}
            onClick={isDropdownCell(i) ? () => setIsOpen(!isOpen) : undefined}
            style={
              i == 0 ? { paddingLeft: `${12 + rowCounter * 20}px` } : undefined
            }
          >
            {isDropdownCell(i) ? (
              <span className={isOpen ? style['cell--active'] : style.cell}>
                {<Arrow />}
                {item}
              </span>
            ) : (
              item
            )}
          </td>
        ))}
      </tr>
      <>{isOpen && children}</>
    </>
  );
};
