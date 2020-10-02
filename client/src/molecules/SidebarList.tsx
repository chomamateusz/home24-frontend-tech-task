import React from 'react'

import SidebarItem, { SidebarItemProps } from '../atoms/SidebarItem'

export interface SidebarListProps {
  items?: SidebarItemProps[],
  [key: string]: any,
}

const SidebarList = (props: SidebarListProps) => {
  const { items, ...otherProps } = props

  return (
    <>
      {
        items && items.length ?
          <ul
            {...otherProps}
          >
            {
              items.map((item, i) => {
                return (
                  <SidebarItem
                    key={`${i}-${item.urlPath}`}
                    {...item}
                  />
                )
              })
            }
          </ul>
          :
          'Loading...'
      }
    </>
  )
}

export default SidebarList