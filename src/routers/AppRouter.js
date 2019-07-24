import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/projects" component={ProjectsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;