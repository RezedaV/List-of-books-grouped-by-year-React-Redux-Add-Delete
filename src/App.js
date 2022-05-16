import './App.css';
import React from 'react';
import {Provider,} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import BookBlocks from "./Components/BookBlocks";


function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App" >
              <BookBlocks/>
          </div>
        </PersistGate>
      </Provider>

  );
}

export default App;
