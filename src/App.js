import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Covid from "./components/covid/Covid";
import Corporate from "./components/corporate/Corporate";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Landing />
            <Covid />
            <Corporate />
        </div>
    );
}

export default App;
