import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

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
            <Stack direction="horizontal" gap={3}>
                <Button variant="primary">Add Transaction</Button>
                <Button variant="secondary">Refresh</Button>
            </Stack>
            
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Currency</th>
                        <th>User</th>
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