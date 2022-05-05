import './App.css';
import React, {useState} from 'react';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import Booklist from "./Components/Booklist";
import CatalogYear from "./Components/CatalogYear";
import Form from "./Components/Form/Form";
import CustomForm from "./Components/Form/Form";
import Select from "./Components/Filter/select";
import YearGroup from "./Components/YearGroup/YearGroup";
import Form2new from "./Components/Form/Form2new";


function App() {
    // const [books, setBooks] = useState([
    //     {   id:1,
    //         name:'Идеальный программист. Как стать профессионалом разработки ПО',
    //         author:'Роберт Мартин',
    //         year: 2011,
    //         rating: 5,
    //         isbn:'978-5-459-01044-2'
    //     },
    //     {   id:2,
    //         name:'Интрижки мишки',
    //         author:'Елена Галенко',
    //         year: 2021,
    //         rating: '',
    //         isbn:''
    //     },
    //     {   id:3,
    //         name:'7 навыков высокоэффективных людей',
    //         author:'Стивен Кови',
    //         year: 1989,
    //         rating: 5,
    //         isbn:' 978-5-9614-2021-0'
    //     },
    //     {   id:4,
    //         name:'Чистый код: создание, анализ и рефакторинг',
    //         author:'Роберт Мартин',
    //         year: '',
    //         rating: 5,
    //         isbn:'978-5-496-00487-9'
    //     },
    //     {   id:5,
    //         name:'Джордж и Большой взрыв',
    //         author:'Стивен Хокинг, Люси Хокинг',
    //         year: 2011,
    //         rating: 5,
    //         isbn:'978-5-4370-0089-2'
    //     },
    // ]);

    const [selectedSort, setSelectedSort] = useState('');

    // const [years, setYears] = useState([
    //     {
    //         id:1,
    //         year: 2011
    //     },
    //     {
    //         id:2,
    //         year: 1989
    //     },
    //     {
    //         id:3,
    //         year: 3000
    //     },
    //     {
    //         id:4,
    //         year: ''
    //     }
    // ])

    const createNewBook = (newBook) => {
        // yearToBooks["noYear"] =[newBook]; // и это работает, но данные выводятся только после нажатия на кнопку
        // // удаления например


        // setYearToBooks({2021:[...books, newBook]}) это работает но выводит все под 2021 годом

        setYearToBooks((prevYearToBooks) => ({
            ...prevYearToBooks,
            ["Добавленные книги"]: [newBook],
        }));
        // это если уже было с ключом 2021
        // setYearToBooks((prevYearToBooks) => ({
        //     ...prevYearToBooks,
        //     [2021]: [...prevYearToBooks[2021], newBook],
        // }));


        // this.setState({
        //     dob: {
        //         ...this.state.dob,
        //         year: '1980'
        //     }
        // })

        console.log(yearToBooks)
        console.log(newBook)
    }

    //старая функция для примера оставила, потом удалить
    // const createNewBook = (newBook) => {
    //     setBooks([...books, newBook])
    // }


    // const onDeleteChat = (idToDelete) => {



    //     // dispatch(deleteChat(idToDelete))
    //
    //     const newBooks = yearToBooks.noYear.filter(book => book.id !== idToDelete)
    //     setYearToBooks(newBooks);
    //     console.log(newBooks)
    //
    //
    //     // setYearToBooks(prevYearToBooks => prevYearToBooks.filter(book => book.id !== idToDelete));
    //
    //     // setMessages((prevMessages) => {
    //     //     const newMesgs = {...prevMessages}
    //     //
    //     //     delete newMesgs[idToDelete]
    //     //     return newMesgs
    //     // })

    // }

    const onDeleteChat = (idToDelete) => {
        // const newBooks = yearToBooks.noYear.filter(b => b.id !== book.id)
        // setYearToBooks(newBooks);

        // const newBooks = yearToBooks["year"].name


        const newMessageList = {...yearToBooks.noYear}
        delete yearToBooks.noYear[idToDelete];
        setYearToBooks(newMessageList)

        console.log(newMessageList)
    }


    //старая функция для примера оставила, потом удалить
    //переделать эти функции
    // const onDeleteChat = (book) => {
    //     setBooks(books.filter(b => b.id !== book.id))
    // }

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort)
    //     setBooks([...books].sort((a,b) => a[sort].localeCompare(b[sort])))
    // }




    const [yearToBooks, setYearToBooks] = useState({
        2021:[
            {   id:1,
                name:'Интрижки мишки',
                author:'Елена Галенко',
                year: 2021,
                rating: '',
                isbn:''
            },
        ],
        2011: [
            {   id:2,
                name:'Идеальный программист. Как стать профессионалом разработки ПО',
                author:'Роберт Мартин',
                year: 2011,
                rating: 5,
                isbn:'978-5-459-01044-2'
            },
            {   id:3,
                name:'Джордж и Большой взрыв',
                author:'Стивен Хокинг, Люси Хокинг',
                year: 2011,
                rating: 5,
                isbn:'978-5-4370-0089-2'
            },
        ],
        1989:[
            {   id:4,
                name:'7 навыков высокоэффективных людей',
                author:'Стивен Кови',
                year: 1989,
                rating: 5,
                isbn:' 978-5-9614-2021-0'
            },
        ],
        noYear: [
            {   id:5,
                name:'Чистый код: создание, анализ и рефакторинг',
                author:'Роберт Мартин',
                year: '',
                rating: 5,
                isbn:'978-5-496-00487-9'
            },
        ]
    });

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App" >
              <Form2new createNewBook={createNewBook}/>
              <hr/>
              <YearGroup yearToBooks={yearToBooks} onDeleteChat={onDeleteChat}/>

              {/*<ul>*/}
              {/*    {Object.keys(yearToBooks).map(year => (*/}
              {/*        <li className='yearGroup'>*/}
              {/*            <div>{year}</div>*/}
              {/*            <ul>*/}
              {/*                {yearToBooks[year].map(book => <li className='book'>{*/}
              {/*                    <div>*/}
              {/*                        <strong>{book.name}</strong>*/}
              {/*                        <div>*/}
              {/*                            Автор книги: {book.author}*/}
              {/*                        </div>*/}
              {/*                        <div>*/}
              {/*                            Год публикации: {book.year}*/}
              {/*                        </div>*/}
              {/*                        <div>*/}
              {/*                            Рейтинг: {book.rating}*/}
              {/*                        </div>*/}
              {/*                        <div>*/}
              {/*                            ISBN: {book.isbn}*/}
              {/*                        </div>*/}
              {/*                    </div>*/}
              {/*                }</li>)}*/}
              {/*            </ul>*/}
              {/*        </li>*/}
              {/*    ))}*/}
              {/*</ul>*/}



              {/*<CustomForm createNewBook={createNewBook}/>*/}
              {/*<hr/>*/}
              {/*<div>*/}
              {/*    <Select*/}
              {/*        value={selectedSort}*/}
              {/*        onChange={sortPosts}*/}
              {/*        defaultValue="Сортировка по"*/}
              {/*        options={[*/}
              {/*              {value: 'name', name: 'По наименованию'},*/}
              {/*              {value: 'author', name: 'По автору'},*/}
              {/*        ]}*/}
              {/*    />*/}
              {/*</div>*/}

              {/*{books.length !== 0*/}
              {/*    ? <CatalogYear*/}
              {/*        deleteBook={deleteBook}*/}
              {/*        books={books}*/}
              {/*        years={years}*/}
              {/*     />*/}
              {/*    : <h1>В библиотеке книг нет :(</h1>*/}
              {/*}*/}


          </div>
        </PersistGate>
      </Provider>

  );
}

export default App;

// сделать группировку с sort ... может получится че то

// рекомендованную книгу как выводить не могу найти инфо.. может быть сделать отдельный компонент,
// и проходясь по массиву с книгами найти подхощую и вывести в компоненте...