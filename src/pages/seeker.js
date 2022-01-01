import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
require("babel-core/register");
require("babel-polyfill");
import GridRender from "../components/gridRender";

async function getHeros(name) {
    return await axios.get(
        `https://www.superheroapi.com/api.php/1589015884770221/search/${name}`
    );
} 


const Seeker = () => {
             
    const [searchedHero, setSearchedHero] = useState("")
    const [matchedHeros, setMatchedHeros] = useState([]); 

    useEffect(() => {
        getHeros(searchedHero).then((heros) => {
            const hero = heros.data.response != "error" ? heros.data.results : []
            localStorage.setItem("addHeroAction", true);
            setMatchedHeros(hero);
        }, console.error);
    }, [searchedHero]);
    
    

    return (
        <div>
            <nav>
                    <Link to="/home" >Go home</Link>
                </nav>
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
                    setSearchedHero(values.name);
                }}
                >
                {() => (
                    <Form>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                    <button type="submit">
                        Submit
                    </button>
                    </Form>
                )}
                </Formik>
                {matchedHeros.length != 0 && <GridRender matchedHeros = {matchedHeros} />}
        </div>
        )
    } 


export default Seeker; 