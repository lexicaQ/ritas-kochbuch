
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Configure error handling
const errorHandler = (error: Error) => {
  console.error('Application error:', error);
};

// Set up global error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

// Ensure the DOM is fully loaded before mounting
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    errorHandler(error as Error);
  }
} else {
  console.error("Root element not found");
}
