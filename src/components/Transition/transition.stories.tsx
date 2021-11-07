import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import Transition from './transition';
import Button from '../Button'
import Icon from '../Icon'


export default {
    title: 'Almost/Transition',
    component: Transition,
    argTypes: {},
} as ComponentMeta<typeof Transition>;


export const  TransitionTest = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button label="点击" onClick={() => setVisible(!visible)} />
            <Transition
                in={visible}
                timeout={300}
            >
                <Icon icon="coffee" size="10x"/>
            </Transition>
        </div>
    )
}