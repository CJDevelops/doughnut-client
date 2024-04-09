import React from 'react';
import PropTypes from 'prop-types';

function Transaction({ transaction }) {
    return (
        <div>
            <h6>Transaction ID: {transaction.transaction_id}</h6>
            <p>Name: {transaction.transaction_name}</p>
            <p>Date: {new Date(transaction.transaction_date).toLocaleDateString()}</p>
            <p>Amount: {transaction.transaction_amount}</p>
            <p>Category ID: {transaction.category_id}</p>
            <p>Subcategory ID: {transaction.subcategory_id}</p>
            <p>Currency ID: {transaction.currency_id}</p>
            <p>User ID: {transaction.user_id}</p>
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
        currency_id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        transaction_type: PropTypes.string.isRequired
    }).isRequired
};

export default Transaction;