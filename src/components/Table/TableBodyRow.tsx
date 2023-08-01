import React, { FC } from 'react';

interface Props {
  items: string[];
}

export const TableBodyRow: FC<Props> = ({ items }) => {
  return (
    <tr>
      {items.map((item, i) => (
        <td key={i}>{item}</td>
      ))}
    </tr>
  );
};
