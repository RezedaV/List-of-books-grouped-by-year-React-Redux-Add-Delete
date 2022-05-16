import React from 'react';
import BookItem from "../BookItem/BookItem";
import s from './BookGroup.module.css'

const BookGroup = ({yearToBooks, year, onDeleteChat}) => {
    return (
        <ul className={s.catalogBook}>
            {yearToBooks[year].map((book, index) => <li className='book' key={book.id}>{
                <BookItem number={index+1} book={book} onDeleteChat={onDeleteChat}/>
            }</li>)}
        </ul>
    );
};

export default BookGroup;