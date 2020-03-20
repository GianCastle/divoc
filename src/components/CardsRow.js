import React, { useState, useEffect, useRef } from 'react'
import { CardTitle, CardText, Card, Col, Row } from 'reactstrap'
import { omit } from 'ramda'
import useFetch from 'use-http'

const StatsCard = ({ title = '', content = '' }) => (
  <Col md={4} sm={12}>
    <Card body>
      <CardTitle>{title}</CardTitle>
      <CardText className="text-uppercase font-weigth-bold">{content}</CardText>
    </Card>
  </Col>
)

export const CardsRow = () => {
  const [stats, setStats] = useState({})
  const { get, response } = useFetch({ data: {}, suspense: true })
  const mounted = useRef(false)

  const fetchData = async () => {
    const stats = await get('/all')
    response.ok ? setStats(omit(['updated'], stats)) : console.error(response)
  }

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    fetchData()
  })

  return (
    <Row className="pt-3 pt-3">
      {Object.keys(stats).map((k, i) => (
        <StatsCard key={i} title={stats[k].toLocaleString()} content={k} />
      ))}
    </Row>
  )
}
