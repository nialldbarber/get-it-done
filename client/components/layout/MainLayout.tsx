import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
  children: ReactNode;
}

const Layout = styled.div`
  background: #fff;
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default MainLayout;
