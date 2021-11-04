import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './menu';

const { SubMenu, Item } = Menu

export default {
    title: 'Almost/Menu',
    component: Menu,
    subcomponents: { SubMenu, Item },
    argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
    <Menu {...args}>
        <Menu.SubMenu key="sub1" title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub4" title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
        </Menu.SubMenu>
    </Menu>

)

export const Primary = Template.bind({});

Primary.args = {
    style: { width: 256 },
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: "inline"
};