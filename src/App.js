import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import AppRouter from "./config/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
