import "./App.css";
import Navigation from "./component/navs/Navigation";
import Home from "./component/Home/Home";
import Section from "./component/NumbersSection/Section";
import About from "./component/About/About";
import About2 from "./component/About/About2";
import Explore from "./component/Eplore/Exolore";
import Review from "./component/Review/Review";
import FAQ from "./component/FAQ/FAQ";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home/>
      <Section/>
      <About/>
      <About2/>
      <Explore/>
      <Review/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
