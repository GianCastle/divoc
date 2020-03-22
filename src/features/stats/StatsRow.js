import React from 'react'

import { Row } from 'reactstrap'
import { StatsCard } from './StatsCard'

import { useSelector, useDispatch } from 'react-redux'

import { getLocations } from './statsSlice'
import { getGlobalStats } from './statsSelectors'
import { useDidMount } from '../../hooks/useDidMount'

export const StatsRow = () => {
  const dispatch = useDispatch()
  const stats = useSelector(getGlobalStats)
  const dispatcher = () => dispatch(getLocations())

  useDidMount(dispatcher)

  return (
    <Row className="pt-3 pb-3">
      {Object.keys(stats).map((k, i) => (
        <StatsCard key={i} title={stats[k]} content={k} />
      ))}
    </Row>
  )
}
