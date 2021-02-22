import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Covid from "./components/covid/Covid";
import Corporate from "./components/corporate/Corporate";
import Housecalls from "./components/housecalls/Housecalls";
import Insurance from "./components/insurance/Insurance";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Landing />
            <Covid />
            <Corporate />
            <Housecalls />
            <Insurance />
        </div>
    );
}

export default App;
