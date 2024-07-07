import React from 'react';
import PartneredWithUs from './components/PartneredWithUs';
import Footer from './components/Footer'; // Import Footer
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PartneredWithUs />
        <Footer /> {/* Include Footer */}

      </main>
    </div>
  );
}

export default App;





