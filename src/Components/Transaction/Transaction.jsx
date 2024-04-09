import React from 'react';
import PropTypes from 'prop-types';

function Transaction({ transaction }) {
    return (
        <tr>
            <td>Transaction ID: {transaction.transaction_id}</td>
            <td>Name: {transaction.transaction_name}</td>
            <td>Date: {new Date(transaction.transaction_date).toLocaleDateString()}</td>
            <td>Amount: {transaction.transaction_amount}</td>
            <td>Category ID: {transaction.category_id}</td>
            <td>Subcategory ID: {transaction.subcategory_id}</td>
            <td>Currency ID: {transaction.currency_id}</td>
            <td>User ID: {transaction.user_id}</td>
            <td>Type: {transaction.transaction_type}</td>
        </tr>
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