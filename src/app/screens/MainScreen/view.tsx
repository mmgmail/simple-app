import { AppHeader, AppTable } from 'app/components';

import './style.scss';

const ContainerView = () => {
  return (
    <div className="main-screen">
      <AppHeader pageTitle={'App Table'} />
      <div className="main-screen__inner">
        <AppTable />
      </div>
    </div>
  )
}

export default ContainerView;