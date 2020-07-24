import React from 'react'
import { Col, Card, CardTitle, CardText } from 'reactstrap'

export const StatsCard = ({ title = '', content = '' }) => (
  <Col sm={12} md={2}>
    <div className="card-row">
      <Card body>
        <CardTitle>{title}</CardTitle>
        <CardText className="font-weigth-bold text-primary text-capitalize">
          {content}
        </CardText>
      </Card>
    </div>
  </Col>
)
