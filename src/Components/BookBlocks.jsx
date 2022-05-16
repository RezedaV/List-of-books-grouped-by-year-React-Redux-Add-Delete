import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {collection, getDocs, addDoc, deleteDoc, doc} from "@firebase/firestore";
import {addBook, deleteBook} from "../store/book/actions";
import YearGroup from "./YearGroup/YearGroup";
import Select from "./Filter/select";
import {db} from "../firebase";
import {selectBooks} from "../store/book/selectors";
import Form from "./Form/Form";





function BookBlocks() {
    const yearToBooks = useSelector(selectBooks);
    const dispatch = useDispatch();
    // const [yearToBooks, setYearToBooks] = useState({});

    const [selectedSort, setSelectedSort] = useState('');
    // const booksCollectionRef = collection(db, "GroupBooks")

    // useEffect(() => {
    //     const getBooks = async () =>{
    //         const data = await getDocs(booksCollectionRef);
    //         // setYearToBooks(data.docs.map((doc) => ({
    //         //     ...doc.data(),
    //         //     id: doc.id})))
    //         console.log(data.docs)
    //         console.log(data.docs[0]._document.data.value.mapValue.fields[2011].arrayValue.values[0].mapValue.fields)
    //         // docs[0]._document.data.value.mapValue.fields[2011].arrayValue.values[0].mapValue.fields.id
    //         //     [0]._document.data.value.mapValue.fields
    //
    //     }
    //     getBooks();
    //     //изменить потом на return getBooks;
    // }, [])  // (убирать books чтобы посмотреть как работает сортировка)
    //




    const createNewBook = (newBook) => {
        // setYearToBooks((prevYearToBooks) => ({
        //     ...prevYearToBooks,
        //     [newBook.year]: [newBook],
        //     //добавляется книга с годом, год тянет из новой книги
        //     // если не писать год то не удаляет его потом, надо сделать чтобы добавлялось автоматом noYear
        // }));
        dispatch(addBook(newBook));
    }

    const onDeleteChat = book => {
        // const temp = {...yearToBooks};
        // temp[book.year] = temp[book.year].filter((b) => b.id !== book.id)
        // console.log(temp)
        // setYearToBooks(temp)
        dispatch(deleteBook(book));
    }
    // по правильному если пустой год,то и его нужно как то удалять(если успею сделать)


    //сортировка
    // const sortPosts = (sort, book) => {
    //     setSelectedSort(sort)
    //     // const temp = {...yearToBooks};
    //     // temp[book.name] = {...yearToBooks}[2021].sort((a,b) => a[sort].localeCompare(b[sort]))
    //     setYearToBooks([{...yearToBooks}["2011"]].sort((a,b) => a[sort].localeCompare(b[sort])))
    //     // setYearToBooks(temp)
    // }

    return (
        <div>
            <Form createNewBook={createNewBook}/>
            <hr/>
            {/*<div>*/}
            {/*    <Select*/}
            {/*        value={selectedSort}*/}
            {/*        onChange={sortPosts}*/}
            {/*        defaultValue="Сортировка по"*/}
            {/*        options={[*/}
            {/*              {value: 'name', name: 'По наименованию'},*/}
            {/*        ]}*/}
            {/*    />*/}
            {/*</div>*/}
            <YearGroup
                yearToBooks={yearToBooks}
                onDeleteChat ={onDeleteChat}
            />
        </div>
    );
}

export default BookBlocks;

