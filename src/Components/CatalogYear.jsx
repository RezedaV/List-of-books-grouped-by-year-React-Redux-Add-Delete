import React from 'react';
import Booklist from "./Booklist";
import BookItem from "./BookItem";

const CatalogYear = ({books, years}) => {
    return (
        <div>
            <h1>Каталог книг</h1>
            <ul>
                {years.map((year, index) => (
                    <li key={year.id}>
                        <div>{year.year}</div>
                        <Booklist books={books} years={years}/>
                    </li>
                ))}
            </ul>

            {/*если что можно сделать чтобы не было группировок по годам, это не удаляй*/}
            {/*<ul>*/}
            {/*    {books.map((book, index) => (*/}
            {/*        <li key={book.id}>*/}
            {/*            <div>{book.year}</div>*/}
            {/*            <BookItem number={index+1} book={book}/>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

        </div>
    );
};

export default CatalogYear;



