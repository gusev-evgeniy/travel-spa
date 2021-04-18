import { Route } from 'react-router';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { Services } from './Pages/Services';
import { SignUp } from './Pages/SignUp';


function App() {
  return (
    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/serveces'>
        <Services />
      </Route>
      <Route path='/sign-up'>
        <SignUp />
      </Route>
    </>
  );
}

export default App;
