import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import SidebarItem, { SidebarItemProps } from './SidebarItem';

export default {
  title: 'SidebarItem',
  component: SidebarItem,
} as Meta;

const Template: Story<SidebarItemProps> = args => <SidebarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  urlPath: 'path/to',
  name: 'Item name',
};
