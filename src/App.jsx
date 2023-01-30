import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
        <Intro />
        <Contact />
        <Testimonials />
        <Works />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
