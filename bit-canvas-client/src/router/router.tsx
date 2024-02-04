import { MainLayout } from '@/layout/main-layout';
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/(main)/home'));
const SingupPage = lazy(() => import('@/pages/(auth)/signup'));
const LoginPage = lazy(() => import('@/pages/(auth)/login'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  { path: '/signup', element: <SingupPage /> },
  { path: '/login', element: <LoginPage /> },
]);

export function AppRouter() {
  return (
    <Suspense fallback='loading'>
      <RouterProvider router={router} />
    </Suspense>
  );
}
