import {React, StrictMode} from 'react';
import {ReactDOM, createRoot} from 'react-dom/client';
import './index.css';
import App from './components/App';

// ReactDOM.render(
//   <App />
//   ,document.getElementById("root")
// );

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);