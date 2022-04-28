import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Form.module.css'
import * as Yup from 'yup'
import MyTextInput from "../MyTextInput/MyTextInput";


const CustomForm = ({createNewBook}) => {
    const [createBook, setCreateBook] = useState({
        name:'',
        author:'',
        year:'',
        rating: 0,
        isbn:''
    });

    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [isbn, setIsbn] = useState('');

    // все разъединить заново

    const [nameDirty, setNameDirty] = useState(false);
    const [authorDirty, setAuthorDirty] = useState(false);
    const [yearDirty, setYearDirty] = useState(false);
    const [ratingDirty, setRatingDirty] = useState(false);

    const [nameError, setNameError] = useState('Название книги не может быть пустым');
    const [authorError, setAuthorError] = useState('Обязательное поле, книга должна содержать хотя бы одного автора');
    const [yearError, setYearError] = useState('Год издания начиная с 1800');
    const [ratingError, setRatingError] = useState('Значения рейтинга с 0 до 10');

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'author':
                setAuthorDirty(true)
                break
            case 'year':
                setYearDirty (true)
                break
            case 'rating':
                setRatingDirty (true)
                break
        }
    }

    const addNewBook = (e) => {
        e.preventDefault();
        const newBook = {
            ...createBook,
            id: Date.now()
        }
        // вызываем переданную пропсом функцию(калбэком передаем наверх в state данные отсюда)
        createNewBook(newBook)
        setCreateBook({name:'', author:'', year:'', rating:'', isbn:''});

    }

    return (
            <form className={s.form}>
                <label htmlFor='name'>Название книги</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={createBook.name}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setCreateBook({...createBook, name: e.target.value})}
                />
                {(nameDirty && nameError) && <div className={s.error}>{nameError}</div>}
                {/*<ErrorMessage name="name" className={s.error} component="div"/>*/}

                <label htmlFor='author'>Автор книги</label>
                <input
                    id="author"
                    name="author"
                    type="text"
                    value={createBook.author}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setCreateBook({...createBook, author: e.target.value})}
                />
                {(authorDirty && authorError) && <div className={s.error}>{authorError}</div>}
                {/*<ErrorMessage name="author" className={s.error} component="div"/>*/}

                <label htmlFor='year'>Год публикации</label>
                <input
                    id="year"
                    name="year"
                    type="text"
                    value={createBook.year}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setCreateBook({...createBook, year: e.target.value})}
                />
                {(yearDirty && yearError) && <div className={s.error}>{yearError}</div>}
                {/*<ErrorMessage name="year" className={s.error} component="div"/>*/}

                <label htmlFor='rating'>Рейтинг</label>
                <input
                    id="rating"
                    name="rating"
                    type="number"
                    value={createBook.rating}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setCreateBook({...createBook, rating: e.target.value})}
                />
                {(ratingDirty && ratingError) && <div className={s.error}>{ratingError}</div>}
                {/*<ErrorMessage name="rating" className={s.error} component="div"/>*/}

                <label htmlFor='isbn'>ISBN</label>
                <input
                    id="isbn"
                    name="isbn"
                    type="text"
                    value={createBook.isbn}
                    onBlur={e => blurHandler(e)}
                    onChange={e => setCreateBook({...createBook, isbn: e.target.value})}
                />
                {/*<ErrorMessage name="isbn" className={s.error} component="div"/>*/}

                <button onClick={addNewBook} type="submit">Создать</button>
            </form>

    )
};

export default CustomForm;



// Короче сделать заново ручную валидацию, эта через YUP не работает теперь...
// или разовбраться с YUP или формиком.. че то мешает  почему не работает
// смотри onSubmit на 52 строке че то с ним

// import React, {useState} from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import s from './Form.module.css'
// import * as Yup from 'yup'
// import MyTextInput from "../MyTextInput/MyTextInput";
//
//
// const CustomForm = ({createNewBook}) => {
//     const [createBook, setCreateBook] = useState({
//         name:'',
//         author:'',
//         year:'',
//         rating: 0,
//         isbn:''
//     });
//
//
//     const addNewBook = (e) => {
//         e.preventDefault();
//         const newBook = {
//             ...createBook,
//             id: Date.now()
//         }
//         // вызываем переданную пропсом функцию(калбэком передаем наверх в state данные отсюда)
//         createNewBook(newBook)
//         setCreateBook({name:'', author:'', year:'', rating:'', isbn:''});
//
//     }
//
//     return (
//         <Formik
//             initialValues = {{
//             name:'',
//             author:'',
//             year:'',
//             rating:0,
//             isbn:''
//         }}
//             validationSchema={ Yup.object({
//             name:Yup.string()
//                 .max(100, 'Максимум 100 символов!')
//                 .required('Обязательное поле!'),
//             author: Yup.string()
//                 .required('Обязательное поле, книга должна содержать хотя бы одного автора'),
//             year: Yup.number()
//                 .min(1800, 'Год издания начиная с 1800'),
//             rating: Yup.number()
//                 .min(0, 'Минимальный рейтинг 0')
//                 .max(10, 'Максимальный рейтинг 10'),
//         })}
//             onSubmit={ values => console.log(JSON.stringify(values, null, 2))}
//         >
//             <Form className={s.form}>
//                 <label htmlFor='name'>Название книги</label>
//                 <Field
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={createBook.name}
//                     onChange={e => setCreateBook({...createBook, name: e.target.value})}
//                 />
//                 <ErrorMessage name="name" className={s.error} component="div"/>
//
//                 <label htmlFor='author'>Автор книги</label>
//                 <Field
//                     id="author"
//                     name="author"
//                     type="text"
//                     value={createBook.author}
//                     onChange={e => setCreateBook({...createBook, author: e.target.value})}
//                 />
//                 <ErrorMessage name="author" className={s.error} component="div"/>
//
//                 <label htmlFor='year'>Год публикации</label>
//                 <Field
//                     id="year"
//                     name="year"
//                     type="text"
//                     value={createBook.year}
//                     onChange={e => setCreateBook({...createBook, year: e.target.value})}
//                 />
//                 <ErrorMessage name="year" className={s.error} component="div"/>
//
//                 <label htmlFor='rating'>Рейтинг</label>
//                 <Field
//                     id="rating"
//                     name="rating"
//                     type="number"
//                     value={createBook.rating}
//                     onChange={e => setCreateBook({...createBook, rating: e.target.value})}
//                 />
//                 <ErrorMessage name="rating" className={s.error} component="div"/>
//
//                 <label htmlFor='isbn'>ISBN</label>
//                 <Field
//                     id="isbn"
//                     name="isbn"
//                     type="text"
//                     value={createBook.isbn}
//                     onChange={e => setCreateBook({...createBook, isbn: e.target.value})}
//                 />
//                 <ErrorMessage name="isbn" className={s.error} component="div"/>
//
//                 <button onClick={addNewBook} type="submit">Создать</button>
//             </Form>
//         </Formik>
//     )
// };
//
// export default CustomForm;
//
//
//
// // Короче сделать заново ручную валидацию, эта через YUP не работает теперь...
// // или разовбраться с YUP или формиком.. че то мешает  почему не работает
// // смотри onSubmit на 52 строке че то с ним