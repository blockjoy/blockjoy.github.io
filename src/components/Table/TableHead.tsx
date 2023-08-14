import React, { FC } from 'react';

interface Props {
  items: string[];
}

export const TableHead: FC<Props> = ({ items }) => {
  return (
    <thead>
      <tr>
        {items.map((item, i) => (
          <th key={i}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
