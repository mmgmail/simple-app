import {
  useReducer,
  useEffect,
  useState
} from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  userReducer,
  initialState,
  AuthContext
} from 'app/store';
import {
  LoginScreen,
  MainScreen
} from 'app/screens';

const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [isToken, setIsToken] = useState({});
  let navigate = useNavigate();

  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    const token = (JSON.parse(localStorage.getItem('token') || '{}'));
    
    if (!Object.keys(token).length) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
  }

  useEffect(() => {
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

  useEffect(() => {
    if (Object.keys(isToken).length) navigate('/app');
  }, [isToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <MainScreen />
            </RequireAuth>
          }
        >
          <Route path={':userId'} element={<>Edit User</>} />
          <Route path={'new'} element={<>New User</>} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
