import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h3>Transaction List</h3>
          </Col>
          <Col>
            <h1>Donut Category Pie Chart</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Money Line Graph</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
