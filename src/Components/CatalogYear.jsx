// потом это удалить
import React from 'react';
import Booklist from "./Booklist";
import BookItem from "./BookItem/BookItem";

const CatalogYear = ({books, years,deleteBook}) => {
    return (
        <div>
            <h1>Каталог книг</h1>
            {/*1 вариант*/}
            {/*<ul>*/}
            {/*    {years.map((year, index) => (*/}
            {/*        <li key={year.id}>*/}
            {/*            <div>{year.year}</div>*/}
            {/*            <Booklist books={books} years={years} deleteBook={deleteBook}/>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


            {/*2 вариант*/}
            <ul>
                {books.map((book, index) => (
                    <li key={book.id}>
                        <div>{book.year}</div>
                        <BookItem number={index+1} book={book} deleteBook={deleteBook}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default CatalogYear;



