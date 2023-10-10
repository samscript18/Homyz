import {
  Navbar,
  Header,
  Brands,
  Residencies,
  Values,
  Contact,
  Footer,
} from "./containers";
import { CTA } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="black-bg">
        <div className="white-gradient"></div>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <Residencies />
      <Values />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
