import HeadPanel from "./components/Header";
import { GlobalStyles } from "./global";
import { Main } from './components/Main/Main';
import SignIn from './components/Main/SignIn';
import SignUp from './components/Main/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <HeadPanel />
       
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        
      </div>
    </Router>
  );
}
