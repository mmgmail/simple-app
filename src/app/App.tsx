import { useReducer, useLayoutEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import {
  userReducer,
  initialState,
  AuthContext
} from './store';
import {
  LoginScreen,
  MainScreen
} from './screens';

function RequireAuth({ auth, children }: { auth: number, children: JSX.Element }) {
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isToken, setIsToken] = useState({});
  let navigate = useNavigate();

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = (JSON.parse(localStorage.getItem('token') || '{}'));
    setIsToken(token);

    if(Object.keys(token).length){
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token
        }
      })
    }
  }, []);

  useLayoutEffect(() => {
    if (Object.keys(isToken).length) navigate('/');
  }, [isToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/"
          element={
            <RequireAuth auth={Object.keys(isToken).length}>
              <MainScreen />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
