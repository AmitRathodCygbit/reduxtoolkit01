import { Provider } from 'react-redux';
import './App.css';
import Todoview from './container/Todoview';
import store from './Store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Todoview/>
    </div>
    </Provider>
  );
}

export default App;
