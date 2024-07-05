import React from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <>
        <Navbar></Navbar>
        <Home></Home>
        <Main></Main>
        <Footer></Footer>
        </>
    )
}

export default App;