import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'success' | 'info' | 'warning' | 'error';
export interface IconProps extends FontAwesomeIconProps {
    /**
     * 主题风格
     */
    theme?: ThemeProps;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
