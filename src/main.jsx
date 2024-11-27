import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import RBACProvider from './context/RBACContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RBACProvider>
      <DarkModeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </DarkModeProvider>
    </RBACProvider>
  </React.StrictMode>
);
