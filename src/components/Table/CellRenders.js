import React from 'react';

export const headerRenderer = ({ dataKey }) => <span>{dataKey}</span>;

export const priceCellRenderer = type => ({ rowData }) => (
  <span className={type ? type : rowData.type}>{rowData.price}</span>
);

export const normalCellRenderer = column => ({ rowData }) => <span>{rowData[column]}</span>;
