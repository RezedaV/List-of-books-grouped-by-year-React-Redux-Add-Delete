import './App.css';
import React, {useState} from 'react';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import Booklist from "./Components/Booklist";
import CatalogYear from "./Components/CatalogYear";
import Form from "./Components/Form/Form";
import CustomForm from "./Components/Form/Form";


function App() {
    const [books, setBooks] = useState([
        {   id:1,
            name:'Идеальный программист. Как стать профессионалом разработки ПО',
            author:'Роберт Мартин',
            year: 2011,
            rating: 5,
            isbn:'978-5-459-01044-2'
        },
        {   id:2,
            name:'Интрижки мишки',
            author:'Елена Галенко',
            year: 2021,
            rating: '',
            isbn:''
        },
        {   id:3,
            name:'7 навыков высокоэффективных людей',
            author:'Стивен Кови',
            year: 1989,
            rating: 5,
            isbn:' 978-5-9614-2021-0'
        },
        {   id:4,
            name:'Чистый код: создание, анализ и рефакторинг',
            author:'Роберт Мартин',
            year: '',
            rating: 5,
            isbn:'978-5-496-00487-9'
        },
        {   id:5,
            name:'Джордж и Большой взрыв',
            author:'Стивен Хокинг, Люси Хокинг',
            year: 2011,
            rating: 5,
            isbn:'978-5-4370-0089-2'
        },
    ]);

    const [years, setYears] = useState([
        {
            id:1,
            year: 2011
        },
        {
            id:2,
            year: 1989
        },
        {
            id:3,
            year: 3000
        },
        {
            id:4,
            year: ''
        }
    ])



  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App" >
              <h2>Добавить книгу</h2>
              <CustomForm/>
              <CatalogYear books={books} years={years}  />
          </div>
        </PersistGate>
      </Provider>

  );
}

export default App;

