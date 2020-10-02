import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import SidebarItem, { SidebarItemProps } from '../../atoms/SideBarItem/SidebarItem'

export interface SidebarListProps {
  items?: SidebarItemProps[],
  [key: string]: any,
}

const listCss = `
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const SidebarList = (props: SidebarListProps) => {
  const { items, ...otherProps } = props

  return (
    <React.Fragment>
      {
        items && items.length ?
          <ul
            css={css`${listCss}`}
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
    </React.Fragment>
  )
}

export default SidebarList