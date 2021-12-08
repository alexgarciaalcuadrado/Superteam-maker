import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";


class Seeker extends React.Component{
    state = {
        name: ""
    }
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    /* fetchData(){
            axios.get(`https://www.superheroapi.com/api.php/1589015884770221`)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        });
        } */    

    onChange(e){
        this.setState({ name: e.target.value})
    }

    onClick(e){
        e.preventDefault();
        console.log(this.state.name);
    }

    
    render(){
        return (
            <div>
                <h1>Find your next teammate!</h1>
                    <Formik
                    initialValues={{ name: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (
                            !/^[a-zA-Z]*$/.test(values.name)
                        ) {
                            errors.name = 'Invalid name';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </Form>
                    )}
                    </Formik>

            </div>
            )
    }
}


export default Seeker; 