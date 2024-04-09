import React from 'react';
import PropTypes from 'prop-types';

function Transaction({ transaction }) {
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