import { AppHeader } from 'app/components';
import './style.scss';

const ContainerView = () => {
  return (
    <div className="main-screen">
      <AppHeader pageTitle={'App Table'} />
      <div className="main-screen__inner"></div>
    </div>
  )
}

export default ContainerView;