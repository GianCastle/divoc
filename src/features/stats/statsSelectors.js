import { sumBy, map, pick, cond, constant, stubTrue, maxBy } from 'lodash'

export const locationsSelector = state => state.location
export const getLocations = ({ locations }) => locations

export const getMostConfirmedCountry = ({ stats }) =>
  maxBy(getLocations(stats), ({ active }) => Number(active))

export const getGlobalStats = ({ stats }) => {
  const locations = getLocations(stats)
  const aggregateStat = key =>
    sumBy(locations, x => Number(x[key])).toLocaleString()

  const confirmed = aggregateStat('active')
  const deaths = aggregateStat('deaths')
  const recovered = aggregateStat('recovered')
  const todayCases = aggregateStat('todayCases')
  const todayDeaths = aggregateStat('todayDeaths')
  const criticals = aggregateStat('critical')
  const casesPerMillion = aggregateStat('casesPerOneMillion')

  return {
    ['Confirmados']: confirmed,
    ['Muertes']: deaths,
    ['Recuperados']: recovered,
    ['Casos de hoy']: todayCases,
    ['Muertos de hoy']: todayDeaths,
    ['Casos por millon']: casesPerMillion,
    ['Casos Criticos']: criticals
  }
}

export const getMarkersCoords = ({ stats }) => {
  /** TODO: use severity on something else */
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
    ...pick(x, ['active', 'countryInfo']),
    severityColor: getSeverityColor(Number(x.active))
  }))
}
