import React from 'react';
import Direcory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const Homepage = () =>(
    <div className="homepage">
        <div className="directory-menu">
            <Direcory />
        </div>
    </div>
)

export default Homepage