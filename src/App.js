import "./App.css";
import Hero from "./Components/Herosection/Hero";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
