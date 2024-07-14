import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home').then((module) => ({ default: module.Home })));
const UserPage = lazy(() => import('@/pages/user').then((module) => ({ default: module.UserPage })));

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
              <Outlet />
            </Suspense>
          }
        >
          <Route
            path='/user/:id'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserPage />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
