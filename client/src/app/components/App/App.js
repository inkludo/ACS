import React, { useEffect } from 'react';
import { useRoutes } from '../../../router';
import { useDispatch, useSelector } from "react-redux";

import Navigation from '../../../components/Navigation';
import { isAuthenticated } from '../../../features/Auth/selectors';
import { autoLogin } from '../../../features/Auth/actions';


const App = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthenticated);

  useEffect(() => {
    dispatch(autoLogin())
  })

  //autoLogin

  const routes = useRoutes(isAuth);
  return (
    <>
      <Navigation />
      {routes}
    </>
  );
};

export default App;