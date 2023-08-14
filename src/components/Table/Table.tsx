import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const Table: FC<Props> = ({ children }) => {
  return <table>{children}</table>;
};
