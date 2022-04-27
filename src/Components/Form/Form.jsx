import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Form.module.css'
import * as Yup from 'yup'
import MyTextInput from "../MyTextInput/MyTextInput";


const CustomForm = () => {
    return (
        <Formik
            initialValues = {{
            name:'',
            author:'',
            year:'',
            rating:0,
            isbn:''
        }}
            validationSchema={ Yup.object({
            name:Yup.string()
                .max(100, 'Максимум 100 символов!')
                .required('Обязательное поле!'),
            author: Yup.string()
                .required('Обязательное поле, книга должна содержать хотя бы одного автора'),
            year: Yup.number()
                .min(1800, 'Год издания начиная с 1800'),
            rating: Yup.number()
                .min(0, 'Минимальный рейтинг 0')
                .max(10, 'Максимальный рейтинг 10'),
        })}
            onSubmit={ values => console.log(JSON.stringify(values, null, 2))}

        >
            <Form className={s.form}>
                <MyTextInput
                    label="Название книги"
                    id="name"
                    name="name"
                    type="text"
                />
                <MyTextInput
                    label="Автор книги"
                    id="author"
                    name="author"
                    type="text"
                />
                <MyTextInput
                    label="Год публикации"
                    id="year"
                    name="year"
                    type="text"
                />
                <MyTextInput
                    label="Рейтинг"
                    id="rating"
                    name="rating"
                    type="number"
                />
                <MyTextInput
                    label="ISBN"
                    id="isbn"
                    name="isbn"
                    type="text"
                />
                <button type="submit">Создать</button>
            </Form>
        </Formik>
    )
};



export default CustomForm;