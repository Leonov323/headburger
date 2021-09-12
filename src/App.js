import { HeadPanel } from "./components/Header";
import { GlobalStyles } from "./global";
import { Main } from './components/Main/Main'

export default function App() {
  return (
      <div>
        <GlobalStyles />
        <HeadPanel />
        <Main />
      </div>
  );
}
