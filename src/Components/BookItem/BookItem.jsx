import React from 'react';
import MyButton from "../MyButton/MyButton";
import s from './BookItem.module.css'


const BookItem = ({book,number, onDeleteChat}) => {
    return (
        <div className={s.bookItem}>
            <div>
                <strong>{number}.{book.name}</strong>
                <div>
                    Автор книги: {book.author}
                </div>
                <div>
                    Год публикации: {book.year}
                </div>
                <div>
                    Рейтинг: {book.rating}
                </div>
                <div>
                    ISBN: {book.isbn}
                </div>
            </div>
            <div>
                <MyButton onClick={() => onDeleteChat(book)}>Удалить книгу</MyButton>
            </div>
        </div>
    );
};

export default BookItem;