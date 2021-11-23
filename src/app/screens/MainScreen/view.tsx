import { AppHeader, AppTable } from 'app/components';
import { Outlet, useLocation } from "react-router-dom";

import './style.scss';

const ContainerView = () => {
  const location = useLocation();

  return (
    <div className="main-screen">
      <AppHeader pageTitle={'App Table'} />
      <div className="main-screen__inner">
        {location.pathname === '/app' && <AppTable />}
        <Outlet />
      </div>
    </div>
  )
}

export default ContainerView;