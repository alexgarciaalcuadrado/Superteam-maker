import React, {useEffect, useState} from "react";
import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';
import axios from "axios";


const Login = (props) => {
  const [token, setToken] = useState(false);

  const verification = () => {
    if( token && props.isAuth){
      return <Navigate to="/home"/>
    }
  }

  useEffect(() => {
      if(localStorage.getItem("token") === null){
        setToken(false);
      } else {
        setToken(true);
      }
  }, [token]) 

    let logInError = {};
    return(
      <div className="login__background">
        <div className="login container">
          {verification()}
          <h1 className="display-1 title login__title">Make a team as <span>powerfull</span> as you!</h1>
          <h6 className="login-title__sub">Please log in to create your superteam</h6>
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
                <label className="form-label label" name="email">Email</label>
                <br />
              <input
                className="form-control form-control-lg input login__input"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <br />
              <label className="form-label label " name="password">Password</label>
              <br />
              <input
                className="form-control form-control-lg input login__input"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <br />
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </form>
            )}
            </Formik>
            
        </div>
      </div>
    )

}

export default Login;