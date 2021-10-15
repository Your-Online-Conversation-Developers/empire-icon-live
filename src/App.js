import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import AlGhaffar from "./components/projects/AlGhaffar";
import IndusEmpire from "./components/projects/IndusEmpire";
import EmpireBusiness from "./components/projects/EmpireBusiness";
import ScrollToTop from "./components/elements/ScrollToTop";
import SimpleReactLightbox from "simple-react-lightbox";

const App = () => {
  return (
    <SimpleReactLightbox>
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/al-ghaffar-heights" component={AlGhaffar} />
          <Route exact path="/indus-empire" component={IndusEmpire} />
          <Route
            exact
            path="/empire-business-center"
            component={EmpireBusiness}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ScrollToTop>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/00923029228222"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </BrowserRouter>
    </SimpleReactLightbox>
  );
};

export default App;
