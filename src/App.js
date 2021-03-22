import Header from './component/header';
import SignUp from './component/signup';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      
    </div>
  );
}

export default App;
