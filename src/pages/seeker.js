import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
require("babel-core/register");
require("babel-polyfill");
import GridRender from "../components/gridRender";
import Home from "./home";

async function getHeros(name) {
    return axios.get(
        `https://www.superheroapi.com/api.php/1589015884770221/search/${name}`
    );
} 

const Seeker = (props) => {
    const heros = props.heros;
    console.log(heros)
    const navigate = useNavigate();         
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
            <button onClick={() => {<Home heros={"hero1"}/>}}>Go back home</button>
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
                {matchedHeros.length != 0 && <GridRender props = {matchedHeros} />}
        </div>
        )
    } 


export default Seeker; 