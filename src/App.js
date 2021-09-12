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
      
        <GlobalStyles />
        <HeadPanel />  
          <Switch>
            <Route path="/headburger/sign-in">
              <SignIn />
            </Route>
            <Route path="/headburger/sign-up">
              <SignUp />
            </Route>
            <Route path="/headburger/">
              <Main />
            </Route>
          </Switch>       
      
    </Router>
  );
}
