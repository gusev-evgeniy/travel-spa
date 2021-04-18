import './App.css';
import { CardsSection } from './Components/CardsSection/CardsSection';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { StartSection } from './Components/StartSection/StartSection';


function App() {
  return (
    <div>
      <Navbar />
      <StartSection />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
