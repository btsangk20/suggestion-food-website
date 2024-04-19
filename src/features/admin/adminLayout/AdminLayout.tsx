'use client';

import React, { useId } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { generalTheme } from '@/theme/theme';
import { LogoStyled } from './AdminLayout.style';
import { AdminHeader } from './AdminHeader';
import Image from 'next/image';
import { ADMIN_PATH } from '@/constant/commonConstant';

const { Content, Sider } = Layout;

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      key: `${ADMIN_PATH.MENU1}`,
      icon: React.createElement(UserOutlined),
      label: `Menu 1`,
      children: [
        {
          key: `${ADMIN_PATH.MENU11}`,
          label: `Menu 1.1`
        },
        {
          key: `${ADMIN_PATH.MENU12}`,
          label: `Menu 1.2`
        }
      ]
    },
    {
      key: `${ADMIN_PATH.MENU2}`,
      icon: React.createElement(NotificationOutlined),
      label: `Menu 2`,
      children: [
        {
          key: `${ADMIN_PATH.MENU21}`,
          label: `Menu 2.1`
        }
      ]
    }
  ];

  return (
    <Layout>
      <Layout
        style={{
          height: `calc(100vh)`,
          overflow: 'auto'
        }}
      >
        <Sider
          width={generalTheme.adminSidebarWidth}
          style={{
            background: colorBgContainer,
            left: 0,
            top: 0,
            bottom: 0,
            borderRight: '1px solid #eee'
          }}
        >
          <LogoStyled>
            <Image
              alt="logo"
              src={'/images/logo.svg'}
              width={185 - generalTheme.generalSpace}
              height={generalTheme.adminHeaderHeight}
              priority
            />
          </LogoStyled>
          <div
            style={{
              overflow: 'auto',
              height: `calc(100% - ${generalTheme.adminHeaderHeight}px)`
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={[ADMIN_PATH.MENU11]}
              defaultOpenKeys={[ADMIN_PATH.MENU1]}
              style={{ height: '100%', borderRight: 0 }}
              items={items}
            />
          </div>
        </Sider>
        <Layout>
          <AdminHeader />

          <Content
            style={{
              padding: generalTheme.generalSpace,
              background: colorBgContainer
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
