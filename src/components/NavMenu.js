import { Menu } from "antd"
import { NavLink } from "react-router-dom";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Users', 'users', <NavLink key="users" to='/dashboard' /> ),
    getItem('Logout', 'users', <NavLink key="users" to='/dashboard/status' /> )
]

const NavMenu = ({...rest}) => {
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