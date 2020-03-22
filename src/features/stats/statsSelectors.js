import { sumBy } from 'lodash'

export const locationsSelector = state => state.location

export const getGlobalStats = ({ stats }) => {
  const { locations } = stats

  const aggregateStat = key =>
    sumBy(locations, ({ stats }) => Number(stats[key])).toLocaleString()

  const confirmed = aggregateStat('confirmed')
  const deaths = aggregateStat('deaths')
  const recovered = aggregateStat('recovered')

  return { confirmed, deaths, recovered }
}
