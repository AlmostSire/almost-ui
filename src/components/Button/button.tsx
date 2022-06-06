import React, { FC } from 'react';
import { Button, ButtonProps } from 'antd';

interface CustomButtonProps extends ButtonProps {
 /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * 按钮内容
   */
  label: string;
 /**
   * Optional click handler
   */
  onClick?: () => void;
   /**
   * 测试文档dhhh
   */
  name?: string;
}

/**
 * Primary UI component for user interaction
 */

export const CustomButton: FC<CustomButtonProps> = ({
  label,

  ...props
}) => {

  return (
    <Button {...props}>
      {label}
    </Button>
  )
}

export default CustomButton