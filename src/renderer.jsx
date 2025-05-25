import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// นำเข้าแต่ละหน้า
import Dashboard from './pages/Dashboard';
import BotForm from './pages/BotForm.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'botform':
        return <BotForm />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <nav className="mb-6 flex gap-4">
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('botform')}>New Bot</button>
        {/* <button onClick={() => setCurrentPage('history')}>History</button> */}
      </nav>
      {renderPage()}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
