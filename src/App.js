import HeadPanel from "./components/Header";
import { GlobalStyles } from "./global";
import { Primary, SignIn, SignUp, Contacts, Blog } from './components/Main'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router basename="/" >
      <GlobalStyles />
      <HeadPanel />
      <ScrollToTop />
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Primary />
        </Route>
      </Switch>
    </Router>
  );
}
