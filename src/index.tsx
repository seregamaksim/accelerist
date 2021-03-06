import ReactDOM from 'react-dom';
import 'reset-css';
import './index.css';
import App from './App';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScrollToTop />
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
