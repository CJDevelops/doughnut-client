import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Transaction({ transaction }) {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        axios.get(`/api/categories/${transaction.category_id}`)
            .then(response => {
                setCategory(response.data.name);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get(`/api/subcategories/${transaction.subcategory_id}`)
            .then(response => {
                setSubcategory(response.data.name);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get(`/api/users/${transaction.user_id}`)
            .then(response => {
                setUser(response.data.name);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [transaction]);

    return (
        <div>
            <h6>Transaction ID: {transaction.transaction_id}</h6>
            <p>Name: {transaction.transaction_name}</p>
            <p>Date: {new Date(transaction.transaction_date).toLocaleDateString()}</p>
            <p>Amount: {transaction.transaction_amount}</p>
            <p>Category: {category}</p>
            <p>Subcategory: {subcategory}</p>
            <p>User: {user}</p>
            <p>Type: {transaction.transaction_type}</p>
        </div>
    );
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        transaction_id: PropTypes.number.isRequired,
        transaction_name: PropTypes.string.isRequired,
        transaction_date: PropTypes.instanceOf(Date).isRequired,
        transaction_amount: PropTypes.string.isRequired,
        category_id: PropTypes.number.isRequired,
        subcategory_id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        transaction_type: PropTypes.string.isRequired
    }).isRequired
};

export default Transaction;