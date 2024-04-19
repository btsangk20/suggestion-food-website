import { AdminLayout } from '@/features/admin/adminLayout/AdminLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default Layout;
