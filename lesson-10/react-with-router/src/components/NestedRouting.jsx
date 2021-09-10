import {BrowserRouter as Router, Switch, Link, Route, useHistory, useRouteMatch} from "react-router-dom";


/*
 * This functional component will have code for basic routing example
 * Typically we would use anchor tags to switch between various pages and links
 *
 **/

function NestedRouting() {
  return (
    <div className="nested-routing">
      <h4>We will see how nested routing</h4>
      <Router>
        <ul>
          <li>
            <Link to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/fruits/apple">
              Apple
            </Link>
          </li>
          <li>
            <Link to="/fruits/orange">
              Orange
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/fruits">
            <Fruits/>
          </Route>
          <Route path="/contact-us">
            <ContactUs/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default NestedRouting;

function HomePage() {
  return (
    <h5>I am the home page</h5>
  );
}

function Login() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <>
      <h5>I am the login page</h5>
      <button onClick={goToHomePage}>
        Go back to home
      </button>
    </>
  );
}

function ContactUs() {
  return (
    <h5>I am the Contact Us page</h5>
  );
}

function Fruits() {
  const match = useRouteMatch();
  console.log("Match - ", match);
  return (
    <div className="fruits">
      fruits
      <Switch>
        <Route path={`${match.path}/apple`}>
          <Apple/>
        </Route>
        <Route path={`${match.path}/orange`}>
          <Orange/>
        </Route>
      </Switch>
    </div>
  )
}

function Apple() {
  return (
    <h4>
      This is an Apple fruit
    </h4>
  );
}

function Orange() {
  return (
    <h4>
      This is a Orange fruit
    </h4>
  );
}
