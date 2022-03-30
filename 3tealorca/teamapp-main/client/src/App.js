
import './App.css';
import  Header from './component/header/Header'
import MainPages from './component/mainpages/MainPages';
import {DataProvider} from './GlobalState'

import {BrowserRouter  } from 'react-router-dom'
function App() {
  return (
      <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <MainPages/>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
