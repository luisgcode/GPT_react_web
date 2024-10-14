import "./App.css";

import "./App.css";

// ^ from components
import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Graphlinear from "./components/graphics/Graphlinear";

import Navbar from "./components/navbar/Navbar";

// ^ From containers
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import Whatgpt3 from "./containers/whatgpt3/Whatgpt3";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <Whatgpt3 />
      {/* <Features /> */}
      <Graphlinear />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
