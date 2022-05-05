import React from 'react';
import BookGroup from "../BookGroup/BookGroup";

const YearGroup = ({yearToBooks, onDeleteChat}) => {
    return (
        <ul>
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