import React, { Suspense } from 'react'
import { Provider } from 'use-http'

import { Header } from '../../components/Header'
import { SideNav } from '../../components/SideNav'
import { CardsRow } from '../../components/CardsRow'
import { Container, Row, Col, Spinner } from 'reactstrap'
import { Map } from '../../components/Map'

const Box = ({ children }) => (
  <Col md={11} sm={12}>
    {children}
  </Col>
)

function App() {
  return (
    <Provider url="https://corona.lmao.ninja" retries={3}>
      <div className="App">
        <Header />
        <Container fluid>
          <Row>
            <SideNav />
            <Box>
              <Suspense fallback={<Spinner type="grow" color="primary" />}>
                <CardsRow />
                <Map />
              </Suspense>
            </Box>
          </Row>
        </Container>
      </div>
    </Provider>
  )
}

export default App
