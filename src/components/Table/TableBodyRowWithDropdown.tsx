import React, { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import Arrow from '@site/static/img/greater.svg';
import style from './style.module.scss';

interface Cell {
  name: string | ReactNode;
  isDropdown?: boolean;
}

interface NestedRow {
  cells: Cell[];
  newRow?: NestedRow[];
}

interface Props {
  rows?: NestedRow[]; // Make rows optional for recursion
  counter?: number;
}

export const TableBodyRowWithDropdown: FC<Props> = ({ rows, counter = -1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(counter);

  if (!rows || rows.length === 0) {
    return null;
  }

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <>
      {rows.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          <tr>
            {row.cells.map((cell, i) => (
              <React.Fragment key={i}>
                {cell.name !== undefined && (
                  <td
                    className={
                      cell.isDropdown ? style.cellClickable : undefined
                    }
                    onClick={
                      cell.isDropdown ? () => setIsOpen(!isOpen) : undefined
                    }
                    style={
                      i == 0
                        ? { paddingLeft: `${12 + count * 20}px` }
                        : undefined
                    }
                  >
                    {cell.isDropdown ? (
                      <span
                        className={isOpen ? style['cell--active'] : style.cell}
                      >
                        {<Arrow />}
                        {cell.name}
                      </span>
                    ) : (
                      cell.name
                    )}
                  </td>
                )}
              </React.Fragment>
            ))}
          </tr>
          {row.newRow && isOpen && (
            <TableBodyRowWithDropdown counter={count} rows={row.newRow} />
          )}
        </Fragment>
      ))}
    </>
  );
};
