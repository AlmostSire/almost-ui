import React, { FC } from 'react';
import { Resizable, ResizableProps } from 're-resizable';

export interface ResizableBoxProps extends ResizableProps {
    resizable?: boolean;
}

const getEnable = (resizable: boolean) => {
    return {
        top: false, 
        right: resizable, 
        bottom: false, 
        left: false, 
        topRight: false, 
        bottomRight: false, 
        bottomLeft: false, 
        topLeft: false 
    }
}

export const ResizableBox: FC<ResizableBoxProps> = ({
    minWidth,
    maxWidth,
    resizable = false,
    children,
    ...props
}) => (
    <Resizable
        className='almost-layout-resizable'
        enable={getEnable(resizable)}
        minWidth={minWidth}
        maxWidth={maxWidth}
        {...props}
    >
        {children}
    </Resizable>
)
ResizableBox.displayName = 'AdoptableBox'

export default ResizableBox