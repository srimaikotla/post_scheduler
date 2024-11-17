import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import LoginContext from './Header/LoginContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContext>
      <App />
    </LoginContext>
  </StrictMode>
);
