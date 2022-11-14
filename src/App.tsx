import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux'
import RepositoryList from './components/RepositoriesList'

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for Package</h1>
        <RepositoryList />
      </div>
    </Provider>
  );
}

export default App;
