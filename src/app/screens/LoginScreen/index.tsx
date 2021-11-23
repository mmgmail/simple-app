import {
  useContext,
  useState,
  useEffect
} from 'react';
import { useNavigate } from "react-router-dom";

import { AuthContext } from 'app/store';
import ContainerView from './view';

const LoginScreen = () => {
  interface UILogin {
    email: string,
    password: string
  }

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const initialState = {
    email: '',
    password: ''
  };

  const [data, setData] = useState<UILogin>(initialState);
  const [submit, setSubmit] = useState(false);

  const handleInputChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && data.email.length && data.password.length) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            email: data.email,
            name: 'John'
          },
          token: 'jwt token'
        }
      });
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 1000);
    }
 }, [submit]);

  return (
    <ContainerView
      data={data}
      onSubmit={handleFormSubmit}
      onInputChange={handleInputChange}
    />
  )
}

export default LoginScreen;