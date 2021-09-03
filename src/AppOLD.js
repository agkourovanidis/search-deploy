import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function AppOLD() {

  return (
    <div className="App">
      <Router>
        <Header />

        {/* <Switch> */}
          {/* <Route path="/"> */}
            {/* <SearchPage/> */}
          {/* </Route> */}
          <SearchPage/>
        {/* </Switch> */}
      </Router>

      <Footer />

    </div>
  );
}

export default App;
