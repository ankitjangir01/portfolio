import './App.css';
import Hero from './components/hero/Hero';
import HeroObject from './components/hero/HeroObject';
import background_video from './assets/background_ocean.m4v'

function App() {
  return (
    <div className="App">
      {/* <video id="background-video" loop muted autoPlay style={{'zIndex': -2, 'position': 'absolute', 'maxHeight': '100vh'}}>
        <source src={background_video} type="video/mp4" />
      </video> */}
      <Hero />
      {/* <HeroObject /> */}
    </div>
  );
}

export default App;
