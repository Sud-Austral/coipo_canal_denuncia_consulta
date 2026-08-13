import React from 'react'; import { createRoot } from 'react-dom/client'; import { BrowserRouter } from 'react-router-dom'; import './index.css'; import App from './App.jsx'; import { CanalProvider } from './context/CanalContext.jsx';
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><CanalProvider><App/></CanalProvider></BrowserRouter></React.StrictMode>);
