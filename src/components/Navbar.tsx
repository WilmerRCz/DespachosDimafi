import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useAuthStore } from '../store/auth';
import TitlePage from './TitlePage';

const { Header, Sider, Content } = Layout;

const Navbar: React.FC = () => {
  const collapsed = useAuthStore((state) => state.openToggleSidebar);
  const setCollapsed = useAuthStore((state) => state.setOpenToggleSidebar);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="sm"
         
        onBreakpoint={(broken) => {
          console.log(broken);
          
        }} onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: 24, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <TitlePage title="Despachos" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;