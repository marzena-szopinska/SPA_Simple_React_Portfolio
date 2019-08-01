import React from 'react';
import {Link} from 'react-router-dom';
import imageOne from '../styles/img/Wedding.JPG';

const Portfolio = () => {
    return (
        <div className='container'>
            <section className='portfolio'>
                <h1 className='portfolio__title'>Portfolio</h1>
                <div className='portfolio__projects'>
                    <div className='portfolio__projects_box'>
                        <h3>Title</h3>
                        <Link to='/portfolio/1'><img src={imageOne} alt='Wedding Page' /></Link>
                    </div>
                    <div className='portfolio__projects_box'>
                        <h3>Title</h3>
                        
                        <Link to='/portfolio/2'><img src={imageOne} alt='Wedding Page' /></Link>
                    </div>
                    <div className='portfolio__projects_box'>
                        <h3>Title</h3>
                        <Link to='/portfolio/3'><img src={imageOne} alt='Wedding Page' /></Link>
                    </div>
                </div>   
            </section>
        </div>

    );
}

export default Portfolio;