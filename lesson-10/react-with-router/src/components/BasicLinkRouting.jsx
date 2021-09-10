import {BrowserRouter as Router, Switch, Link, Route, useHistory} from "react-router-dom";


/*
 * This functional component will have code for basic routing example
 * Typically we would use anchor tags to switch between various pages and links
 *
 **/

function BasicLinkRouting() {
  return (
    <div className="basic-routing">
      <h4>We will see how basic routing works with Link elements given by React Router</h4>
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
            <Link to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login/>
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


export default BasicLinkRouting;

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
