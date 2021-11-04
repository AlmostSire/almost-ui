import React from 'react';
import { MenuProps } from 'antd';
export declare class CustomMenu extends React.Component<MenuProps> {
    static Divider: typeof import("rc-menu").Divider;
    static Item: typeof import("antd/lib/menu/MenuItem").default;
    static SubMenu: typeof import("antd/lib/menu/SubMenu").default;
    static ItemGroup: typeof import("rc-menu").MenuItemGroup;
    render(): JSX.Element;
}
export default CustomMenu;
