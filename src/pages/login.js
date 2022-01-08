import React, {useEffect, useState} from "react";
import { Formik } from 'formik';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from "axios";


const Login = (props) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
      if(localStorage.getItem("token") === null){
        setToken(false);
      } else {
        setToken(true);
      }
      console.log(token);
  }, [token]) 


  const verification = () => {
    if( token && props.isAuth){
      return <Navigate to="/home"/>
    }
  }

    let logInError = {};
    return(
        <div>
          {verification()}
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            
            if (!values.password){
                errors.password = "Required";
            }
            return errors;
            }}
            onSubmit={(values) => {
                axios.post("http://challenge-react.alkemy.org/", values)
                .then(response => {
                    let token = response.data.token
                    localStorage.setItem("token", token);
                    localStorage.setItem("addHeroAction", false);
                    setToken(true);
                    return <Navigate to="/home"/>
                })
                .catch(error => {
                    if (error.response) {
                        logInError = error.response.data.error;
                        window.alert(logInError);
                      } else if (error.request) {
                        console.log(error.request);
                      } else {
                        console.log('Error', error.message);
                      }
                      console.log(error.config);
                })
            }}>

            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
            <form onSubmit={handleSubmit}>
                <label name="email">Your email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label name="password">Your password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit">
                Submit
              </button>
            </form>
            )}
            </Formik>
        </div>
    )

}

export default Login;