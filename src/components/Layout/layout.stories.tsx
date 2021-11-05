import { CSSProperties, FC } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout from './index';

const { ResizableBox, AdoptableBox } = Layout

export default {
    title: '布局/Layout 左右布局',
    component: Layout,
    argTypes: {},
} as ComponentMeta<typeof Layout>;

const centerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
const Template: ComponentStory<typeof Layout> = ({ resizable }) => (
    <Layout resizable={resizable } style={{ height: 400 }}>
        <ResizableBox style={{ background: "#3ba0e9", ...centerStyle }}>
            {resizable ? '可调整宽度' : '固定宽度'}
        </ResizableBox>
        <AdoptableBox style={{ background: 'rgba(16, 142, 233, 1)', ...centerStyle }}>
            自适应宽度
        </AdoptableBox>
    </Layout>
)

export const Basic = Template.bind({})

export const Resiz = Template.bind({})

Resiz.args = {
    resizable: true,

}

