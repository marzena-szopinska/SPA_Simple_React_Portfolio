import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <main>
            <div className='intro'>
                  <h1 className='intro__name'>ALex Smitche</h1>
                  <div className='blink'>
                    <h3 className='typing-effect'>Travel the world with me!</h3>
                  </div>
                  <Link className='btn' to='/portfolio'>See More</Link>
            </div>

            <div className='social-icons'>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-twitter-square"></i>
              <i className="fab fa-instagram"></i>
            </div>
        </main>
    );
}

export default HomePage;
