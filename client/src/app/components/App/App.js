import React, { useEffect } from 'react';
import { useRoutes } from '../../../router';
import { useDispatch, useSelector } from "react-redux";

import Navigation from '../../../components/Navigation';
import { isAuthenticated } from '../../../features/auth/selectors';
import { autoLogin } from '../../../features/auth/actions';


const App = () => {

  const dispatch = useDispatch();
  let isAuth = useSelector(isAuthenticated);

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