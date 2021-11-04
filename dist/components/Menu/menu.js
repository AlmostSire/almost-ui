var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Fragment } from 'react';
import { Menu } from 'antd';
var Divider = Menu.Divider, Item = Menu.Item, SubMenu = Menu.SubMenu, ItemGroup = Menu.ItemGroup;
var CustomMenu = /** @class */ (function (_super) {
    __extends(CustomMenu, _super);
    function CustomMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomMenu.prototype.render = function () {
        return (React.createElement(Fragment, null,
            React.createElement(Menu, __assign({}, this.props))));
    };
    CustomMenu.Divider = Divider;
    CustomMenu.Item = Item;
    CustomMenu.SubMenu = SubMenu;
    CustomMenu.ItemGroup = ItemGroup;
    return CustomMenu;
}(React.Component));
export { CustomMenu };
export default CustomMenu;
