import { Route } from 'react-router';
import './GlobalStyles.js';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { Services } from './Pages/Services';
import { SignUp } from './Pages/SignUp';
import { GlobalStyles } from './GlobalStyles.js';
import { useState } from 'react';

function App() {
  // const [isHidden, setIsHidden] = useState(false)
  // console.log(isHidden)

  // const setOverflowAuto = () => {
  //   setIsHidden(!isHidden)
  // }

  return (
    <>
      <GlobalStyles isHidden />
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
