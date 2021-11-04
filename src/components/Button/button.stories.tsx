import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

export default {
    title: 'Almost/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    label: 'button',
};