import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Transaction({ transaction }) {

    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        axios.get(`/api/categories`)
            .then(response => {
                setCategory(response.data.filter(category => category.category_id === transaction.category_id)[0].name)
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
        <>
            <td>{transaction.transaction_id}</td>
            <td>{transaction.transaction_name}</td>
            <td>{new Date(transaction.transaction_date).toLocaleDateString()}</td>
            <td>{transaction.transaction_amount}</td>
            <td>{transaction.category_id}</td>
            <td>{transaction.subcategory_id}</td>
            <td>{transaction.currency_id}</td>
            <td>{transaction.user_id}</td>
            <td>{transaction.transaction_type}</td>
        </>
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
        currency_id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        transaction_type: PropTypes.string.isRequired
    }).isRequired
};

export default Transaction;