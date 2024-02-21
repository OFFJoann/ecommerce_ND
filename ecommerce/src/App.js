import React from "react";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Page } from "./components/Page";
import { DataProvider } from "./context/Dataprovider"
import { Car } from "./components/car/Car";
import { Footer } from "./components/footer/Footer";


function App() {
  return (
      <DataProvider>
      <div className="App">
      <Router>
        <Header />
        <Car />
        <Page />
        <Footer />
      </Router>
      </div>
      </DataProvider>
  );
}

export default App;
