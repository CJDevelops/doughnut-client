import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/api/transactions')
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div>
            <h6>Transaction List</h6>
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
}

export default TransactionList;