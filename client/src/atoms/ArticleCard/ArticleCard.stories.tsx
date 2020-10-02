import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import ArticleCard, { ArticleCardProps } from './ArticleCard';

export default {
  title: 'ArticleCard',
  component: ArticleCard,
  decorators: [(Story) => <div style={{ width: '200px' }}><Story /></div>]
} as Meta;

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Premium Komfortmatratze Smood',
  variantName: '180 x 200cm',
  prices: {
    currency: 'EUR',
    regular: { value: 49999 }
  },
  images: [{ path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp' }],
};