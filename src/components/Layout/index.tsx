import { FC } from 'react'
import Layout, { LayoutProps as ILayoutProps } from './layout'
import ResizableBox, { ResizableBoxProps } from './ResizableBox';
import AdoptableBox, { AdoptableBoxProps } from './AdoptableBox';


export type LayoutProps = ILayoutProps;

export type LayoutComponent = FC<LayoutProps> & {
    ResizableBox: FC<ResizableBoxProps>;
    AdoptableBox: FC<AdoptableBoxProps>,
}

const TransLayout = Layout as LayoutComponent

TransLayout.ResizableBox = ResizableBox;
TransLayout.AdoptableBox = AdoptableBox;

export default TransLayout
