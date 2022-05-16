import React from 'react';
import BookGroup from "../BookGroup/BookGroup";
import s from './YearGroup.module.css'

const YearGroup = ({yearToBooks, onDeleteChat}) => {
    return (
        <ul className={s.yearGroup}>
            {Object.keys(yearToBooks).map(year => (
                <li className='yearGroup' key={year}>
                    <div>{year}</div>
                    <BookGroup yearToBooks={yearToBooks} year={year} onDeleteChat={onDeleteChat}/>
                </li>
            ))}
        </ul>
    );
};

export default YearGroup;