import React from 'react'

export interface SidebarItemProps {
  urlPath: string,
  name: string,
  [key: string]: any,
}

const SidebarItem = (props: SidebarItemProps) => {
  const { urlPath, name, ...otherProps } = props

  return (
    <li
      {...otherProps}
    >
      <a href={`/${urlPath}`}>{name}</a>
    </li>
  )
}

export default SidebarItem