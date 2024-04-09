import { useState, useEffect } from 'react';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTransaction = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isLoading, setIsLoading] = useState(true);

    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [form, setForm] = useState({
        name: '',
        amount: '',
        category: categories[0]?.category_id,
        subcategory: subcategories[0]?.subcategory_id,
        currency: currencies[0]?.currency_id,
        type: 'I',
    });
    const [errors, setErrors] = useState({ name: '', amount: '' });

    useEffect(() => {
        Promise.all([
            axios.get('/api/categories'),
            axios.get('/api/subcategories'),
            axios.get('/api/currencies')
        ]).then(([categoriesResponse, subcategoriesResponse, currenciesResponse]) => {
            setCategories(categoriesResponse.data);
            setSubcategories(subcategoriesResponse.data);
            setCurrencies(currenciesResponse.data);
            setForm({
                name: '',
                amount: '',
                category: categoriesResponse.data[0]?.category_id,
                subcategory: subcategoriesResponse.data[0]?.subcategory_id,
                currency: currenciesResponse.data[0]?.currency_id,
                type: 'I',
            });
            setIsLoading(false);
        });
    }, []);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validation
        let formErrors = {};
        if (!form.name) formErrors.name = 'Name is required';
        if (!form.amount) formErrors.amount = 'Amount is required';
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // No errors, submit the form
            console.log(form);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>; // Or replace with a spinner
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}><FontAwesomeIcon icon={faPlus} /></Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} isInvalid={!!errors.name} required />
                        {errors.name && <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>}
                    </Form.Group>

                    <Form.Group controlId="formAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" name="amount" value={form.amount} onChange={handleChange} isInvalid={!!errors.amount} required />
                        {errors.amount && <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback>}
                    </Form.Group>

                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select name="category" value={form.category} onChange={handleChange} required>
                            {categories.map(category => <option key={category.category_id} value={category.category_id}>{category.category_name}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formSubcategory">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select name="subcategory" value={form.subcategory} onChange={handleChange} required>
                            {subcategories.filter(subcategory => subcategory.category_id === Number(form.category)).map(subcategory => <option key={subcategory.subcategory_id} value={subcategory.subcategory_id}>{subcategory.subcategory_name}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formCurrency">
                        <Form.Label>Currency</Form.Label>
                        <Form.Select name="currency" value={form.currency} onChange={handleChange} required>
                            {currencies.map(currency => <option key={currency.currency_id} value={currency.currency_id}>{currency.currency_name}</option>)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formType">
                        <Form.Label>Type</Form.Label>
                        <Form.Select  name="type" value={form.type} onChange={handleChange} required>
                            <option value="I">Income</option>
                            <option value="E">Expense</option>
                        </Form.Select>

                    </Form.Group>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>        
    );
};

export default AddTransaction;