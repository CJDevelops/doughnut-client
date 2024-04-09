import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

import Table from 'react-bootstrap/Table';

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
            
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category ID</th>
                        <th>Subcategory ID</th>
                        <th>Currency ID</th>
                        <th>User ID</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.transaction_id}>
                            <Transaction transaction={transaction} />
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </div>
    );
}

export default TransactionList;