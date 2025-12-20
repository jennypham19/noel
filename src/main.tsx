import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { ClickToComponent } from 'click-to-react-component';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClickToComponent editor='cursor'/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
