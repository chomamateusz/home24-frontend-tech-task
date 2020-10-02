import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Articles, { ArticlesProps } from './Articles';

const article = {
  name: 'Premium Komfortmatratze Smood',
  variantName: '180 x 200cm',
  prices: {
    currency: 'EUR',
    regular: { value: 49999 }
  },
  images: [{ path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp' }],
}

export default {
  title: 'Articles',
  component: Articles,
} as Meta;

const Template: Story<ArticlesProps> = (args) => <Articles {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryName: 'Category name',
  articleCount: 4,
  articles: [article, article, article, article],
};