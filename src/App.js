import Header from './pages/header';
import Signup from './pages/signup';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header></Header>

      <Route path="/signup">
        <Signup></Signup>
      </Route>

    </div>
  );
}

export default App;
