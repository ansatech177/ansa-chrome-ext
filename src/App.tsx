import { Route, Switch } from "react-router-dom";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import AddSequence from "./routes/AddSequence/AddSequence";

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/add-sequence">
        <AddSequence />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
