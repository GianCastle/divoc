import { sumBy, map, pick } from 'lodash'

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

export const getMarkersCoords = ({ stats }) =>
  map(getLocations(stats), x =>
    pick(x, [
      'stats.confirmed',
      'coordinates.latitude',
      'coordinates.longitude'
    ])
  )
