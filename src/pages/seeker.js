import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import grid from "../components/grid";


class Seeker extends React.Component{
    state = {
        matchedHeros : [],
        addHeroAction : false
    }
    constructor(){
        super();
        this.fetchData = this.fetchData.bind(this);
    }


    fetchData(name){
        axios.get(`https://www.superheroapi.com/api.php/1589015884770221/search/${name}`)
    .then((response) => {
        this.setState({matchedHeros : response.data.results});
        localStorage.setItem("addHeroAction", true);
    }).catch((error) => {
        console.log(error)
    });
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
                    onSubmit={(values) => {
                        this.fetchData(values.name);
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
                    {this.state.matchedHeros.length ?  
                        (
                        <div className="grid__background">
                            <div className="grid">
                                <div className="grid__box grid__top grid__top--container"></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Name</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Intelligence</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Strenght</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Speed</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Durability</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Power</h2></div>
                                <div className="grid__box grid__top grid__top--container"><h2>Combat</h2></div>
                                <div className="grid__box grid__top grid__top--container"></div>
                            </div>
                        </div>
                        )
                        :
                        <div></div>
                    }
                    {this.state.matchedHeros.map(hero => grid(hero, hero.id))}
            </div>
            )
    }
}


export default Seeker; 