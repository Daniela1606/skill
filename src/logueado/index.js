import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import NavMenu, { getItem } from "../components/NavMenu";
import { NavLink } from "react-router-dom";

const items = [
    getItem('Search', 'users', <NavLink key="users" to='/search' /> ),
    getItem('Help', 'users', <NavLink key="users" to='/help' /> ),
    getItem('Contact', 'users', <NavLink key="users" to='/contact' /> ),
    getItem('Settings', 'users', <NavLink key="users" to='/settings' /> )
]

const MenuLogin = ()=> {

    return (
        <Layout style={{maxHeight: '100vh'}}>
            <Sider>
               <NavMenu items={items} style={{height: '100%'}} />
            </Sider>
            <Layout style={{overflowY: 'scroll'}}>
                <Content style={{marginTop: '2em'}}>
                    TEST
                </Content>
            </Layout>
        </Layout>
    )
}


export default MenuLogin