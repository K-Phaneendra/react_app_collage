import "./App.scss";
import Header from "./components/Header";
import Router from "./Router";
import Footer from "./components/Footer";
import "./assets/styles/Home.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container pt-3">
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
