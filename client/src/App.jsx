// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navigation/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import StatsCard from './components/stats/StatsCard.jsx';
import Video from './components/video/Video.jsx';
import Articles from './components/articles/Articles.jsx';
import Partners from './components/partners/Partners.jsx';
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Hero />
        <StatsCard />
        <Video />
        <Articles />
        <Partners />
        <Footer />
      </div>
    </Router>
  );
}

export default App;