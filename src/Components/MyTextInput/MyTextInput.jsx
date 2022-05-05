// import React from 'react';
// import {ErrorMessage, Field, useField} from 'formik';
// import s from "../Form/Form.module.css";
//
// const MyTextInput = ({label, ...props}) => {
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.name}>{label}</label>
//             <input {...props} {...field}/>
//             {meta.touched && meta.error ? (
//                 <div className={s.error}>{meta.error}</div>
//             ) : null}
//         </>
//     );
// };
//
// export default MyTextInput;