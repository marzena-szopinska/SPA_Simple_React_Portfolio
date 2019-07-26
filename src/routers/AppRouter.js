import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import ProjectPage from '../components/ProjectPage';
import ContactPage from '../components/ContactPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/portfolio/:id" component={ProjectPage} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;