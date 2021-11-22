import { useContext, useState, useEffect } from 'react';

import { AuthContext } from "../../store";

import ContainerView from './view';

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  interface UILogin {
    email: string,
    password: string
  }
  
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
    if (data.email.length && data.password.length) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: {
            email: data.email,
            name: 'John'
          },
          token: 'jwt token'
        }
      })
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