import { Provider } from 'react-redux';
import './App.css';
import TodoSelector from './container/TodoSelector';
import TodoDispatch from './container/TodoDispatch';
import store from './Store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <TodoDispatch/>
    <TodoSelector/>
    </div>
    </Provider>
  );
}

export default App;
