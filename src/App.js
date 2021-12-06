import "./App.css";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
