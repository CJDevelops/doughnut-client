import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TransactionList from './Components/Transaction/TransactionList'
import CategoryPieChart from './Components/Charts/CategoryPieChart'
import MoneyLineGraph from './Components/Charts/MoneyLineGraph'
import TopBar from './Components/TopBar'


function App() {
  

  return (
    <>
      <TopBar />
      <Container fluid>
        
        <Row>
          <Col>
            <TransactionList />
          </Col>
          <Col>
            <h3>Donut Category Pie Chart</h3>
            <CategoryPieChart />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <h3>Money Line Graph</h3>
            <MoneyLineGraph />
          </Col>
        </Row> */}
      </Container>
    </>
  )
}

export default App
