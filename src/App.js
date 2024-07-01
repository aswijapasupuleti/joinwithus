import React from 'react';
import PartneredWithUs from './components/PartneredWithUs';
import './App.css';
import headerBackground from './assets/images/header-background.jpg';

function App() {
  const headerStyle = {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#FFFFFF',
    padding: '20px',
    height: '17vh', // Set height to full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    maxWidth: '100%',
    margin: '0 auto',
    borderRadius: '0',
    paddingLeft: '10%', // Add padding to the left
  };

  const headerTextStyle = {
    fontSize: '32px', // Primary heading h1 size
    //background: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    borderRadius: '6px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="App">
      <header className="App-header" style={headerStyle}>
        <h1 style={headerTextStyle}>Services</h1>
      </header>
      <main>
        <PartneredWithUs />
      </main>
      {/* <footer className="App-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
