import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Badge from 'react-bootstrap/Badge';

function Transaction({ transaction }) {

    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [currency, setCurrency] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        axios.get(`/api/categories`)
            .then(response => {
                setCategory(response.data.filter(category => category.category_id === transaction.category_id)[0].category_name)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get(`/api/subcategories`)
            .then(response => {
                setSubcategory(response.data.filter(subcategory => subcategory.subcategory_id === transaction.subcategory_id)[0].subcategory_name)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get(`/api/currencies`)
            .then(response => {
                setCurrency(response.data.filter(currencies => currencies.currency_id === transaction.currency_id)[0].currency_name)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        axios.get(`/api/users`)
            .then(response => {
                setUser(response.data.filter(user => user.user_id === transaction.user_id)[0].username.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '))
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [transaction]);


    return (
        <>
            <td>{transaction.transaction_name}</td>
            <td>{new Date(transaction.transaction_date).toLocaleDateString()}</td>
            <td>{transaction.transaction_amount}</td>
            <td>{category}</td>
            <td>{subcategory}</td>
            <td>{currency}</td>
            <td>{user}</td>
            <td>{transaction.transaction_type === 'I' ? <Badge pill bg="success">Income</Badge> : <Badge pill bg="danger">Expense</Badge>}</td>
        </>
    );
}


export default Transaction;