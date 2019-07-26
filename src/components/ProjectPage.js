import React from 'react';

const ProjectPage = (props) => {
    return (
        <section className='project'>
            <h1>{props.match.params.id}</h1>
        </section>
    );
}

export default ProjectPage;