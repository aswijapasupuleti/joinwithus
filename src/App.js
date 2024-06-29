import React from 'react';
import PartneredWithUs from './components/PartneredWithUs';
import './App.css'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Services</h1>
      </header>
      <main>
        <PartneredWithUs />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;