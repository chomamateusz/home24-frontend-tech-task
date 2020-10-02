import axios from 'axios';

import categoriesQuery from './categories.query';

export const getCategories = () => axios.post(
    '/graphql',
    {
      query: categoriesQuery,
    },
  )
    .then((({ data }) => data.data.categories));

export default getCategories;
