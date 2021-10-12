import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Loader from "./components/loader";
// TO DO: UPDATE LOADER MOUNTAIN-BG TERNARY
import mountainBG from "./assets/mountain-bg.jpg";


function App() {
  return (
    <Router>
      <div className="App">
        {/* NAV */}
        <Navbar />
        {/* PAGES */}
        {mountainBG ? (
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home mountainBG={mountainBG} />
            </Route>
          </Switch>
        ) : (
          <Loader />
        )}
        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
