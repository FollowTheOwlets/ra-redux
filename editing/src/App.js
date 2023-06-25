import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form'
import { configureStore } from "./store/store"
import { Provider } from "react-redux"
import { List } from './components/List';
import { Filter } from './components/Filter';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Filter />
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
