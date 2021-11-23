import { useLocation } from 'react-router';
import ContainerView from './view';

const EditScreen = () => {
  const { state: { user } } = useLocation();
  console.log('user', user)

  return (
    <ContainerView
      data={user}
    />
  )
}

export default EditScreen;