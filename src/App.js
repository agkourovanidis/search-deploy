import "./App.css";
import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import SearchPage from "./components/SearchPage";

export default class App extends Component {

  //#region  для того чтобы получить данные из компонента Header (результат поиска - цены)
  constructor(props) {
    super(props);
    this.state = {
      appPrces: [],
    };
    this.getResultFromHeader = this.getResultFromHeader.bind(this);
  }  
  getResultFromHeader(prces) {
    this.setState({
      appPrces: prces,
    });
    // console.log('App - search result got from Header: ', prces)
  }
  //#endregion

  render() {
    return (
      <div className="App">
        <Router>
          <Header 
          func={this.getResultFromHeader}
          />
          {/* <button onClick={()=>console.log(this.state)}>Resfresh</button> */}

          {/* <Switch> */}
          {/* <Route path="/"> */}
          {/* <SearchPage/> */}
          {/* </Route> */}
          <SearchPage prces={this.state.appPrces}/>
          {/* </Switch> */}
        </Router>

        <Footer />

      </div>
    );
  }
}