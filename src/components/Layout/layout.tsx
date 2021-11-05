import { FC, Children, FunctionComponentElement, cloneElement, HtmlHTMLAttributes } from 'react';
import { ResizableBoxProps } from './ResizableBox';
import classNames from 'classnames';

export interface LayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    /**
     * 可调整的最小宽度
     */
    minWidth?: number;
    /**
     * 可调整的最大宽度
     */
    maxWidth?: number;
    /**
     * 是否开启调整宽度
     */
    resizable?: boolean;
}

export const Layout: FC<LayoutProps> = ({
    minWidth = 200,
    maxWidth = 400,
    resizable = false,
    children,
    style,
    className,
}) => {

    const cls = classNames('almost-layout', className)
    
    const renderChildern = () => {
        return Children.map(children, (child) => {
            const childEle = child as FunctionComponentElement<ResizableBoxProps>
            const { displayName } = childEle.type
            if (displayName === 'AdoptableBox') {
                return cloneElement(childEle, {
                    minWidth,
                    maxWidth,
                    resizable
                })
            } else if (displayName === 'AdaptableBox') {
                return child
            } else {
                console.error("Layout组件必须接受ResizableBox和AdaptableBox组件")
            }
        })
    }
    
    return (
        <div className={cls} style={style}>
            {renderChildern()}
        </div>
    )
}

export default Layout