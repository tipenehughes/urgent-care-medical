import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import Covid from "./components/covid/Covid";
import Sections from "./components/sections/Sections";
import SectionsData from "./components/sections/SectionsData";
import Insurance from "./components/insurance/Insurance";

function App() {
    const sections = SectionsData.map((data, i) => {
        return <Sections data={data} i={i} />;
    });
    return (
        <div className="App">
            <Navigation />
            <Landing />
            <Covid />
            {sections}
            <Insurance />
        </div>
    );
}

export default App;
