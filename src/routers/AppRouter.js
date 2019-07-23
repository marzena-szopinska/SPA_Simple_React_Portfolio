import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
            
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;