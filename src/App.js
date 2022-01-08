import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactDOM from "react-dom";
import "./styles/style.scss";
import Home from "./pages/home";
import Seeker from "./pages/seeker";
import NotFound from "./pages/notFound";
import Login from "./pages/login";


const App = () => {
    const [token, setToken] = useState(false);

  useEffect(() => {
      if(localStorage.getItem("token") === null){
        setToken(false);
      } else {
        setToken(true);
      }
  }, [])

    return (
        <BrowserRouter history={createBrowserHistory}> 
        <Routes>
            <Route exact path="/" element={<Login isAuth={token}/>}/> 
            {/* <Route path="/home" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />}/>
            </Route> */}
            <Route path="/home" element={token ? <Home /> : <Navigate to="/"/>}/>
            <Route path="/seeker" element={token ? <Seeker /> : <Navigate to="/"/>}/>
            {/* <Route path="/seeker" element={<PrivateRoute />}>
                <Route path="/seeker" element={<Seeker />} />
            </Route> */}            
            <Route path="*" element={<NotFound />}/>
        </Routes>   
    </BrowserRouter>
) 
}
 

ReactDOM.render(
        <App />,
    document.getElementById("root"))

