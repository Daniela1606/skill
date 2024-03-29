import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'HELP',
    key: 'mail',
  },
  {
    label: 'CONTACT',
    key: 'contact',
  },
  {
    label: 'PRIVACY',
/*     key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ], */
  },
  {
    label: 'TERMS',
    key: 'terms',
  },
];

const AppMenu = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>
      {items.map((item) => (
        <Menu.Item key={item.key} style={item.label === 'HELP' || item.label === 'CONTACT' || item.label === 'PRIVACY' || item.label === 'TERMS' ? { fontWeight: 'bold' } : null}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default AppMenu;