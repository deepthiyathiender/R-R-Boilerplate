import React, {PropTypes, Component} from 'react';
import { Button } from 'react-bootstrap';

export const Zen = (props) => {
        const {quote, onClickHandler, onFavHandler} = props;
        return (
            <div>
                <h1> Your new Zen quote is </h1>
                <p> { quote } --
                    <Button bsStyle="primary" onClick={ onFavHandler }>
                        Favorite
                    </Button>
                </p>
                <Button bsStyle="primary" onClick={ onClickHandler }>
                    Get New Zen
                </Button>
            </div>
        );
};

Zen.propTypes = {
    quote: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    onFavHandler: PropTypes.func.isRequired
};


export default Zen;