import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

export interface SidebarItemProps {
  [key: string]: any,
  urlPath: string,
  name: string,
}

const listCss = `
  margin: 0 0 0 8px;
  padding: 8px 0;
`;

export const SidebarItem = (props: SidebarItemProps) => {
  const { urlPath, name, ...otherProps } = props;

  return (
    <li
      css={css`${listCss}`}
      {...otherProps}
    >
      <Link to={`/${urlPath}`}>{name}</Link>
    </li>
  );
};

export default SidebarItem;
