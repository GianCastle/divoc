import { sumBy, map, pick, cond, constant, stubTrue } from 'lodash'

export const locationsSelector = state => state.location
export const getLocations = ({ locations }) => locations

export const getGlobalStats = ({ stats }) => {
  const locations = getLocations(stats)

  const aggregateStat = key =>
    sumBy(locations, ({ stats }) => Number(stats[key])).toLocaleString()

  const confirmed = aggregateStat('confirmed')
  const deaths = aggregateStat('deaths')
  const recovered = aggregateStat('recovered')

  return { confirmed, deaths, recovered }
}

export const getMarkersCoords = ({ stats }) => {
  const isRuined = confirmeds => confirmeds > 1000
  const isInDanger = confirmeds => confirmeds > 100 && confirmeds <= 1000
  const isStillControled = confirmeds => confirmeds < 100
  const otherwise = stubTrue()

  const getSeverityColor = cond([
    [isRuined, constant('#fa3252')],
    [isInDanger, constant('#fa394c')],
    [isStillControled, constant('#fa503c')],
    [otherwise, constant('black')]
  ])

  return map(getLocations(stats), x => ({
    ...pick(x, ['stats.confirmed', 'coordinates']),
    severityColor: getSeverityColor(Number(x.stats.confirmed))
  }))
}
