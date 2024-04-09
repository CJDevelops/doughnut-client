import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import TransactionList from './Components/Transaction/TransactionList'


function App() {
  

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h3>Transaction List</h3>
            <TransactionList />
          </Col>
          <Col>
            <h3>Donut Category Pie Chart</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Money Line Graph</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
