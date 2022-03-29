import { Switch, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Chats from "./components/Chats";

//contexts
import AuthContextProvider from "./contexts/AuthContextProvider";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats}/>
          <Route path="/" component={Login} />

        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
