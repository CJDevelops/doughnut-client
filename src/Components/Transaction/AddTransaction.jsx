import React from 'react';

import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTransaction = () => {
    return (
        <Button variant="primary"><FontAwesomeIcon icon={faPlus} /></Button>
    );
};

export default AddTransaction;