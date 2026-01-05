import React, { Component } from 'react'
import {Menu} from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';
const itemName = ['Personal','Skills','Experience']
const subItemName = [
  [
    {key:13,label: <Link to="/Home">Information</Link>},
    {key:14,label:<Link to="/Life">Personal Life</Link>},
    {key:15,label:<Link to="/background">Background</Link>},
  ],
    [
    {key:4,label:<Link to="/IT">IT</Link>},
    // {key:5,label:<Link to="/Design">Design</Link>},
    
  ],
    [
    {key:7,label:<Link to="/Product">Product Manager</Link>},
    {key:8,label:<Link to="/UI">UI/UX Desgin</Link>},
    {key:9,label:<Link to="/Software">Software Engineer</Link>},
    {key:10,label:<Link to="/Volunteer">Volunteer</Link>},
    {key:11,label:<Link to="/Barista">Barista</Link>},
    {key:12,label:<Link to="/Trainer">Personal Trainer</Link>},
  ],
]


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key:`${key}`,
    icon: React.createElement(icon),
    label: itemName[index],
    children: subItemName[index],
  };
});


export default class Nav extends Component {
  render() {
    const colorBgContainer = '#fff';
  
    return (
      <div style={{ padding: '24px 0', background: colorBgContainer}}>
          <div style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </div>

      </div>

    )
  }
}
