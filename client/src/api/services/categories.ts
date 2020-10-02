import axios from 'axios'

import categoriesQuery from '../queries/categories.query'

export const getCategories = () => {
  return axios.post(
    '/graphql',
    {
      query: categoriesQuery,
    }
  )
    .then((({ data }) => data.data.categories))
}

export default getCategories