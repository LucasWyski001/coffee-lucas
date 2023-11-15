import './App.css';
import { NavBar } from './components/NavBar';
import { Content} from './components/Content';

function App() {
  return (
    <div className="App">
        {/*all the different sections of the app will come here*/}
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
