import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRouter';
import SignUp from '../pages/SignUp';
import { selectors } from '../store/ducks';
import { useAppSelector } from '../store/hooks';
import CompanyFavorites from '../pages/CompanyFavorites';
import CompanyProfile from '../pages/CompanyProfile';
import Search from '../pages/Search';
import Prospects from '../pages/Prospects';
import ProspectsDetail from '../pages/ProspectsDetail';

export default function Routes() {
  const isAuthohorized = useAppSelector(selectors.auth.isAuthohorized);
  return (
    <Switch>
      <Route exact path="/">
        {isAuthohorized ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <PrivateRoute path="/company/:id">
        <CompanyProfile />
      </PrivateRoute>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/favorites">
        <CompanyFavorites />
      </PrivateRoute>
      <PrivateRoute path="/search">
        <Search />
      </PrivateRoute>

      <PrivateRoute path="/prospects/:id">
        <ProspectsDetail />
      </PrivateRoute>
      <PrivateRoute path="/prospects">
        <Prospects />
      </PrivateRoute>
      <Route path="/signup">
        {isAuthohorized ? <Redirect to="/dashboard" /> : <SignUp />}
      </Route>
      <Route path="/login">
        {isAuthohorized ? <Redirect to="/dashboard" /> : <Login />}
      </Route>
    </Switch>
  );
}
