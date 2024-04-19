'use client';

import { store } from '@/redux/store';
import { antdTheme } from '@/theme/antdThemeConfig';
import { GlobalStyle } from '@/theme/globalStyle';
import { generalTheme } from '@/theme/theme';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={generalTheme}>
        <GlobalStyle />
        <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
      </ThemeProvider>
    </Provider>
  );
}
