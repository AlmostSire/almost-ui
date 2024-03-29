import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './icon';


export default {
    title: 'Almost/Icon',
    component: Icon,
    argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    icon: 'coffee',
};