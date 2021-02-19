import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Covid from "./components/covid/Covid";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Landing />
            <Covid />
        </div>
    );
}

export default App;
