import React from 'react';
import Nav from 'react-bootstrap/Nav';

function TopBar() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/transactions">Transactions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/categories">Categories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/subcategories">Subcategories</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/currencies">Currencies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default TopBar;