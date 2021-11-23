
import { useState } from 'react';
import { useLocation } from 'react-router';
import ContainerView from './view';

const EditScreen = () => {
  const { state: { user } } = useLocation();
  const [data, setData] = useState(user);
  
  const handleInputChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  return (
    <ContainerView
      data={data}
      onInputChange={handleInputChange}
    />
  )
}

export default EditScreen;