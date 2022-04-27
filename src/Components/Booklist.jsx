import React from 'react';
import {useDispatch} from "react-redux";
import BookItem from "./BookItem";

const Booklist = ({books}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {books.map((book, index) =>
                <BookItem number={index+1} book={book} key={book.id}/>
            )}
        </div>
    );
};

export default Booklist;


// //1. короче пока сделать без редакс потом уже перенести,
// // а то так не понятно как что работает
// //переносить после просмотра видео на юдеми


// 2.может быть сделать массив с годами книг, и из этого массива создавать список по годам и при сравнении
// года из массива с годами и из массива с книгами, добавлять в этот список..
// // 3. заработало, но отображает все в одном,
// как именно сделать чтобы отображалось только в том годе не знаю,
// изучить filter, может с ним как то можно сделать
