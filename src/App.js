import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import AllTrips from './components/AllTrips';
import { Route } from "react-router-dom"

function App() {
  return(
    <div id="box">
      <Header/>
    <main id="main-content">
      <Route path="/" exact component={WelcomePage} />
      <Route path="/all-trips" component={AllTrips} />
    </main>
    </div>
  )
}

export default App;
