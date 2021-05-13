import './App.css';
import { BaseLayout } from './layouts';
import { Home, PhotoDetails } from './pages';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
    const history = useHistory();
  return (
      <BaseLayout>
          <Switch>
              <Route path='/' exact>
                  <Home/>
              </Route>
              <Route path={'/photo/:id'}>
                  <PhotoDetails/>
              </Route>
              <Route >
                  <h1>PAGE NOT FOUND <button onClick={() => { history.push('/')}}>Go Home</button></h1>
              </Route>
          </Switch>
      </BaseLayout>
  );
}

export default App;
