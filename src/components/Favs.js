import React, {PropTypes, Component} from 'react';
import { Button } from 'react-bootstrap';

export const Favs = (props) =>  {
        const {favs} = props;
        return (
            <div>
                {
                    favs.map((fav) => {
                        return (
                            <p key={fav}> { fav } </p>
                        )
                    })
                }
            </div>
        );
};

Favs.propTypes = {
    favs: PropTypes.array.isRequired
};

export default Favs;