import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas)

export type ThemeProps = 'primary' | 'success' | 'info' | 'warning' | 'error';

export interface IconProps extends FontAwesomeIconProps {
    /**
     * 主题风格
     */
    theme?: ThemeProps;
}

export const Icon: React.FC<IconProps> = props => {
    const { className, theme, ...restProps } = props
    const cls = classNames('almost-icon', className, {
        [`almost-icon-${theme}`]: theme
    })
    return <FontAwesomeIcon className={cls} {...restProps}/>
}

export default Icon;