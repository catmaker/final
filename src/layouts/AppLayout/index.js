import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      공통 레이아웃
      <Outlet />
    </div>
  );
};

export default AppLayout;
