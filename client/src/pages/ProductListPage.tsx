import React from 'react'
import { useParams } from 'react-router'

import ProductList from '../templates/ProductList'

import getCategories, { Category } from '../api/categories'

export interface ProductListPageProps {
  [key: string]: any,
}

export const ProductListPage = (props: ProductListPageProps) => {
  const { childCategoryName } = useParams()

  const [categories, setCategories] = React.useState<Category[]>([])

  React.useEffect(() => {
    setCategories([])

    // @TODO use childCategoryName to load chosen category data
    const loadCategories = async () => {
      const categories = await getCategories()

      setCategories(categories)

      const categoryName = categories[0]?.name
      if (categoryName) document.title = categoryName
    }

    loadCategories()
  }, [childCategoryName])

  return (
    <div>
      <ProductList categories={categories} />
    </div>
  )
}

export default ProductListPage