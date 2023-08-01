import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const TableBody: FC<Props> = ({ children }) => {
  return <tbody>{children}</tbody>;
};
