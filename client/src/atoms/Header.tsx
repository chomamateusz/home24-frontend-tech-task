import React from 'react'

export interface HeaderProps {
  [key: string]: any,
}

export const Header = (props: HeaderProps) => {
  const { ...otherProps } = props

  return (
    <>
      <strong>home24</strong>
      <input placeholder={'Search'} />
    </>
  )
}

export default Header