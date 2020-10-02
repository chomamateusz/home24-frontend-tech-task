import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Sidebar, { SidebarProps } from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [{
    urlPath: 'path/to',
    name: 'Item name',
  }],
};