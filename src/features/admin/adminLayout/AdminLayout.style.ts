import { generalTheme } from '@/theme/theme';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

export const WrapperStyled = styled.div``;

export const HeaderStyled = styled(Header)`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white !important;
  height: ${generalTheme.adminHeaderHeight}px !important;
  padding: ${generalTheme.generalSpace}px !important;
  border-bottom: 1px solid #eee;
`;

export const LogoStyled = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  object-fit: contain;
  height: ${generalTheme.adminHeaderHeight}px;
  padding: 0 ${generalTheme.generalSpace}px;
`;
