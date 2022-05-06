import React from 'react';
import DeleteButton from "./DeleteButton";

const BookItem = ({book,number, onDeleteChat}) => {
    return (
        <div>
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
                <button onClick={() => onDeleteChat(book)}>Удалить книгу</button>
                {/*<button onClick={() => alert('work')}>Удалить книгу</button>*/}
            </div>
            {/*<DeleteButton id={book.id} onClick={onDeleteChat}/>*/}
        </div>
    );
};

export default BookItem;