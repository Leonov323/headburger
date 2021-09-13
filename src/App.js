import HeadPanel from "./components/Header";
import { GlobalStyles } from "./global";
import { Main, SignIn, SignUp, Contacts, Blog } from './components/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <HeadPanel />
      <ScrollToTop />
      <Switch>
        <Route path="/headburger/sign-in">
          <SignIn />
        </Route>
        <Route path="/headburger/sign-up">
          <SignUp />
        </Route>
        <Route path="/headburger/contacts">
          <Contacts />
        </Route>
        <Route path="/headburger/blog">
          <Blog />
        </Route>
        <Route path="/headburger/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
