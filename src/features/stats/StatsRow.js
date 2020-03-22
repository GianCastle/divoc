import React, { useState, useEffect, useRef } from 'react'
import { CardTitle, CardText, Card, Col, Row } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'

import { statsSelector, getLocations } from './statsSlice'
import { fetchCovid } from '../../api/coronaApi'

const StatsCard = ({ title = '', content = '' }) => (
  <Col md={4} sm={12} className="pr-0 card-row">
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

export const StatsRow = () => {
  const dispatch = useDispatch()

  const state = useSelector(state => {
    return state.stats
  })

  console.log(state)
  useEffect(() => {
    dispatch(getLocations())
  }, [])
  // console.log(stats)
  return 'uf'
  // <Row className="pt-3 pt-3">
  //   {Object.keys(stats).map((k, i) => (
  //     <StatsCard key={i} title={stats[k].toLocaleString()} content={k} />
  //   ))}
  // </Row>
}
