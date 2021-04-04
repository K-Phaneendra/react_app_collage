import React from 'react'
import { connect } from 'react-redux'
import "./App.scss";
import Header from "./components/Header";
import Router from "./Router";
import Footer from "./components/Footer";
import "./assets/styles/Home.css";
import Loading from './components/Loading';

function App(props) {
  return (
    <div className="App">
      {props.isLoading && <Loading />}
      <Header />
      <div className="container pt-3">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.globalReducer.isLoading
});

export default connect(mapStateToProps)(App);
