import React from 'react';
import {
    Link
} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
const Home = () => {
    return (
        <div>
            <h1><HomeIcon /></h1>
            <Link to="/about">About</Link>
        </div>

    )
}


export default Home;