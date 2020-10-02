import React from 'react'

import ProductList from '../templates/ProductList'

import getCategories, { Category } from '../api/categories'

export interface ProductListPageProps {
  [key: string]: any,
}

export const ProductListPage = (props: ProductListPageProps) => {
  const { ...otherProps } = props

  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    const loadCategories = async () => {
      const categories = await getCategories()

      setCategories(categories)

      const categoryName = categories[0]?.name
      if (categoryName) document.title = categoryName
    }

    loadCategories()
  }, [])

  return (
    <div>
      <ProductList categories={categories} />
    </div>
  )
}

export default ProductListPage