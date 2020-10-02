import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import SidebarList, { SidebarListProps } from './SidebarList';

export default {
  title: 'SidebarList',
  component: SidebarList,
} as Meta;

const Template: Story<SidebarListProps> = args => <SidebarList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      urlPath: 'path/1',
      name: 'Item 1',
    },
    {
      urlPath: 'path/2',
      name: 'Item 2',
    },
  ],
};
