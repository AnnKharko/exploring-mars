import './App.css';
import { BaseLayout } from './layouts';
import { Home, PhotoDetails, Opportunity } from './pages';
import {Link, Route, Switch, useHistory} from 'react-router-dom';

function App() {
    const history = useHistory();
  return (
      <BaseLayout>

          <div>

              {/*<nav>*/}
              {/*        <ul>*/}
              {/*            <li>*/}
              {/*                <Link to="/curiosity">Curiosity</Link>*/}
              {/*            </li>*/}
              {/*            <li>*/}
              {/*                <Link to="/opportunity">Opportunity</Link>*/}
              {/*            </li>*/}
              {/*            <li>*/}
              {/*                <Link to="/spirit">Spirit</Link>*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*    </nav>*/}
              <Switch>
                  <Route path='/curiosity' exact>
                      <Home/>
                  </Route>
                  <Route path={'/photos/:id'}>
                      <PhotoDetails/>
                  </Route>
                  <Route path='/opportunity'>
                      <Opportunity/>
                  </Route>
                  {/*<Route path='spirit'>*/}
                  {/*    <Spirit/>*/}
                  {/*</Route>*/}
                  <Route >
                      <h1>PAGE NOT FOUND <button onClick={() => { history.push('/curiosity')}}>Go Home</button></h1>
                  </Route>
              </Switch>
          </div>
      </BaseLayout>
  );
}

export default App;
