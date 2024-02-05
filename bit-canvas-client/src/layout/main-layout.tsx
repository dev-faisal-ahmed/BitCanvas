import { Topbar } from '@/components/shared/topbar/topbar';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <section className='bg-background'>
      <Topbar />
      <Outlet />
    </section>
  );
}
