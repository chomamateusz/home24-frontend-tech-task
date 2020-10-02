import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import SidebarItem, { SidebarItemProps } from '../../atoms/SideBarItem/SidebarItem';

export interface SidebarListProps {
  [key: string]: any,
  items?: SidebarItemProps[],
}

const listCss = `
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const SidebarList = (props: SidebarListProps) => {
  const { items, ...otherProps } = props;
  const { t } = useTranslation(undefined, { useSuspense: false });

  return (
    <React.Fragment>
      {
        items && items.length ?
          <ul
            css={css`${listCss}`}
            {...otherProps}
          >
            {
              items.map((item, i) => (
                  <SidebarItem
                    key={`${i}-${item.urlPath}`}
                    {...item}
                  />
                ))
            }
          </ul>
          :
          `${t('Loading')}...`
      }
    </React.Fragment>
  );
};

export default SidebarList;
