import Layout from 'components/Layout/Layout';

import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { Loader } from 'components/Loader';

// import { useState } from 'react';

const Home = lazy(() => import('components/pages/Home/Home'));
const RegisterForm = lazy(() =>
  import('components/pages/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() => import('components/pages/LoginForm/LoginForm'));
const PhonebookForm = lazy(() =>
  import('components/pages/PhonebookForm/PhonebookForm')
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<PhonebookForm />} redirectTo="/logIn" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterForm />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/logIn"
          element={
            <RestrictedRoute component={<LoginForm />} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
