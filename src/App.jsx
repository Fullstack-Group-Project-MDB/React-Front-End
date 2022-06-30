import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import ListingDetail from './views/ListingDetail';
import Main from './views/Main';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/listings/:id">
          <ListingDetail />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}
