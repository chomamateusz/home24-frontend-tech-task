import React from 'react'

import ProductList from '../templates/ProductList'

import getCategories from '../api/services/categories'

import { Category } from '../types';

export interface ProductListPageProps {
  [key: string]: any,
}

export const ProductListPage = (props: ProductListPageProps) => {
  const { ...otherProps } = props

  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <div>
      <ProductList categories={categories} />
    </div>
  )
}

export default ProductListPage