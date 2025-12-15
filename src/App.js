import logo from './logo.svg';
import './App.css';


function Titles() {
  return (
    <div className="titles"> 
      <p>
        current layout
      </p>
      <p>
        change up right here
      </p>
      <div>
        <p>
          change even furthur
        </p>

      </div>
        
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Titles />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is my resume
        </p>

      </header>
    </div>
  );
}

export default App;
