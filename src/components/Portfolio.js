import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='container'>
            <section className='portfolio'>
                <h1 className='portfolio__title'>Portfolio</h1>
                <div className='portfolio__projects'>
                    <div className='portfolio__projects_box'>
                        <Link to='/portfolio/1'>Project 1</Link>
                    </div>
                    <div className='portfolio__projects_box'>
                        <Link to='/portfolio/2'>Project 2</Link>
                    </div>
                    <div className='portfolio__projects_box'>
                        <Link to='/portfolio/3'>Project 2</Link>
                    </div>
                </div>   
            </section>
        </div>

    );
}

export default Portfolio;