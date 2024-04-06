
import React, { useState } from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, HomeOutlined, SolutionOutlined, BulbOutlined ,ShopOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleModeChange = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div style={{ background: darkMode ? '#001529' : '#ffffff', marginRight:'0', padding: '0' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Menu mode="horizontal" theme={darkMode ? 'dark' : 'light'} style={{ width: '100%', margin: '0' }}>
          <Menu.Item key="home" icon={<HomeOutlined />} style={{ width: '22%' }}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<ShopOutlined />} style={{ width: '20%' }}>
            <Link to="/shop">Shop</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />} style={{ width: '20%' }}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="treks" icon={<SolutionOutlined />} style={{ width: '25%' }}>
            <Link to="/treks">Treks</Link>
          </Menu.Item>
          <Menu.Item key="mode" icon={<BulbOutlined />} style={{ position: 'absolute', right: '20px' }}>
            <Switch onChange={handleModeChange} checked={darkMode} />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;


