import React from 'react'

import SidebarList, { SidebarListProps } from '../../molecules/SidebarList/SidebarList'

export interface SidebarProps extends SidebarListProps {
  [key: string]: any,
}

export const Sidebar = (props: SidebarProps) => {
  const { items, ...otherProps } = props

  return (
    <>
      <h3>Kategorien</h3>
      <SidebarList items={items} />
    </>
  )
}

export default Sidebar