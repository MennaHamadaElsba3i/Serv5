import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { queryClient } from './queryClient';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/tailwind.css';
import './styles/world.css';
import './styles/hosting-lab.css';
import './styles/serv5-revamped.css';
import './styles/home-tail.css';
import './styles/serv5-journal.css';
import './styles/serv5-hello.css';
import './styles/serv5-web-design.css';
import './styles/serv5-bank-accounts.css';
import './styles/serv5-dark-mode.css';
import './styles/hero-ambient-bg.css';
import './styles/source-pages.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
