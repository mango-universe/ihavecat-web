import Header from './pages/header';
import Signup from './pages/signup';
import Login from './pages/login';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

    </div>
  );
}

export default App;
