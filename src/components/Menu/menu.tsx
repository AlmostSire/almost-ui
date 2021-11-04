import React, { Fragment } from 'react';
import { Menu, MenuProps } from 'antd';

const { Divider, Item, SubMenu, ItemGroup, } = Menu


export class CustomMenu extends React.Component<MenuProps> {
    static Divider = Divider;
    static Item = Item;
    static SubMenu = SubMenu;
    static ItemGroup = ItemGroup;
    render () {
        return (
            <Fragment>
                <Menu {...this.props}/>
            </Fragment>
        )
    }
}

export default CustomMenu;