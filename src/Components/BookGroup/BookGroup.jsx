import React from 'react';
import BookItem from "../BookItem/BookItem";

const BookGroup = ({yearToBooks, year, onDeleteChat}) => {
    return (
        <ul>
            {yearToBooks[year].map((book, index) => <li className='book' key={book.id}>{
                <BookItem number={index+1} book={book} onDeleteChat={onDeleteChat}/>
            }</li>)}
        </ul>
    );
};

export default BookGroup;