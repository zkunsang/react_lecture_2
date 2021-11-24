import logo from "./logo.svg";
import "./App.css";
console.log(process.env.REACT_APP_API_URL);
function App() {
  function onClick() {
    import("./data.json").then(({ name: data }) => {
      console.log({ data });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
