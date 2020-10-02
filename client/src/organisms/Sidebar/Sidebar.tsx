import React from 'react';
import { useTranslation } from 'react-i18next';

import SidebarList, { SidebarListProps } from '../../molecules/SidebarList/SidebarList';

export interface SidebarProps extends SidebarListProps {
  [key: string]: any,
}

export const Sidebar = (props: SidebarProps) => {
  const { items } = props;
  const { t } = useTranslation(undefined, { useSuspense: false });

  return (
    <>
      <h3>{t('Category')}</h3>
      <SidebarList items={items} />
    </>
  );
};

export default Sidebar;
