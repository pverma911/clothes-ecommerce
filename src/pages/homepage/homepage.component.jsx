import React from 'react';
import './homepage.styles.scss'

// Add other components:

import Directory from '../../components/directory/directory.component'


const HomePage = () =>(
    <div className = "homepage">
    
        <div className ="directory-menu">   {/* Container */}
            <Directory />
        </div>

    </div>
)




export default HomePage;