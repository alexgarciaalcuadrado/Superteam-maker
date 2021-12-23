import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import ReactDOM from "react-dom";
import "./styles/style.scss";
import Home from "./pages/home";
import Seeker from "./pages/seeker";
import NotFound from "./pages/notFound";
import Login from "./pages/login";


 const App = () => (
        <BrowserRouter history={createBrowserHistory}> 
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/> 
            <Route path="/seeker" element={<Seeker />} />
            <Route path="seeker" element={<Seeker />} /> 
            <Route path="*" element={<NotFound />}/>
        </Routes>   
    </BrowserRouter>
) 

/* const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="/" component={Login} />
        <Stack.Screen name="/home" component={Home} />
        <Stack.Screen name="/seeker" component={Seeker} />
        </Stack.Navigator>
        </NavigationContainer>
)
 */
ReactDOM.render(
    <App />,
    document.getElementById("root"))

