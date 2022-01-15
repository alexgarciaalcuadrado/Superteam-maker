import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
require("babel-core/register");
require("babel-polyfill");
import GridRender from "../components/gridRender";
import { NavBar } from "../components/navBar";

async function getHeros(name) {
    return await axios.get(
        `https://www.superheroapi.com/api.php/1589015884770221/search/${name}`
    );
} 

const Seeker = () => {    
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchedHero, setSearchedHero] = useState("")
    const [matchedHeros, setMatchedHeros] = useState([]); 


    useEffect(() => {
        let isMounted = true; 
        if (isMounted) {
        getHeros(searchedHero).then((heros) => {
                const error = heros.data.response == "error" ? true : false;
                setIsError(error);
                const hero = heros.data.response != "error" ? heros.data.results : [];
                localStorage.setItem("addHeroAction", "true");
                setMatchedHeros(hero);
            
        }, console.error);
    }
    return () => { isMounted = false };
    }, [searchedHero]);

    const errorHandler = () => {
        if(isError != true){
            setErrorMessage("The hero you're looking for is not available, please search another one.")
        }
    }

    return (
        <div className="seeker__background">
            <NavBar />
            <div className="seeker home">
                <h1 className="title seeker__title"><span>Find your next teammate!</span></h1>
                <div className="seeker__form">
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
                    errorHandler()

                }}
                >
                {() => (
                    <div className="seeker__form">                  
                        <Form>
                        <div>
                        <label className="form-label seeker__label" name="hero">Write the name of the hero you want</label>
                        </div>
                        <div className="seeker__form--inside-flex">
                        <Field autoComplete="off" className="form-control form-control-lg input seeker__input" type="text" name="name" />
                        <button className="btn btn-dark seeker__btn" type="submit">
                            Submit
                        </button>
                        </div>
                        <ErrorMessage name="name" component="div" className="error-message"/>
                        {errorMessage}
                        </Form>
                    </div>  
                )}
                </Formik>
                </div> 
                <div className="seeker__grid-position">
                {matchedHeros.length != 0 && <GridRender matchedHeros = {matchedHeros}/>}
                </div>   
            </div>
        </div>
        )
    } 


export default Seeker; 