import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './sass/style.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
)