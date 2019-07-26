import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h1>List of my projects</h1>
            <Link to='/portfolio/1'>Project 1</Link>
            <Link to='/portfolio/2'>Project 2</Link>
        </section>
    );
}

export default Portfolio;