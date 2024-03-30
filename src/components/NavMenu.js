import { Menu } from "antd"
import { NavLink } from "react-router-dom";

export function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const NavMenu = ({items,...rest}) => {
    return (
            <Menu 
                defaultSelectedKeys={['1']}
                items={items}
                mode="inline"
                {...rest}
            />
    )
}

export default NavMenu