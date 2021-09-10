import {BrowserRouter, Link, Route, Switch, useParams} from 'react-router-dom'
function RoutingWithParams() {
  return (
    <div className="routing-params">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/users/1">
              James Bond
            </Link>
          </li>
          <li>
            <Link to="/users/2">
              Ramesh
            </Link>
          </li>
          <li>
            <Link to="/users/3">
              Suresh
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RoutingWithParams;

function Home() {
  return (
    <h4>
      This is the home page
    </h4>
  );
}


function User() {
  const {userId} = useParams();
  return (
    <div className="user">
      <h3>We are showing details of user - {userId}</h3>
    </div>
  );
}
