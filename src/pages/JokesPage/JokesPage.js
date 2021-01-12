import React from 'react';
import PropTypes from 'prop-types';
import './JokesPage.css';
import Jokes from '../../components/Jokes/Jokes';

const JokesPage = () => {

    return (
        <div className="JokesPage">
            <Jokes />
        </div>
    )
};

JokesPage.propTypes = {};

JokesPage.defaultProps = {};

export default JokesPage;
