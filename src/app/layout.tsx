import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/config/Providers';
import AntdRegistry from '@/lib/AntdRegistry';
import StyledComponentsRegistry from '@/lib/StyledComponentRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Codebase',
  description: 'Created by TGL',
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AntdRegistry>
            <Providers>{children}</Providers>
          </AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
