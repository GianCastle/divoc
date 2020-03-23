import React from 'react'

import { Header } from './components/Header'
import { Container, Row, Col, Spinner } from 'reactstrap'
import { Map } from './components/Map'
import { StatsRow } from './features/stats/StatsRow'

const Box = ({ children }) => (
  <Col md={11} sm={12}>
    {children}
  </Col>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row>
          <Box>
            <StatsRow />
            <Map />
          </Box>
        </Row>
      </Container>
    </div>
  )
}

export default App
