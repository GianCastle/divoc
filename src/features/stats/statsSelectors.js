import { sumBy, map, pick, maxBy } from 'lodash'

export const locationsSelector = state => state.location
export const getLocations = ({ locations }) => locations

export const getMostConfirmedCountry = ({ stats }) =>
  maxBy(getLocations(stats), ({ active }) => Number(active))

/**
 * @TODO
 * refact this for use a reduce(x) function
 */

export const getGlobalStats = ({ stats }) => {
  const aggregateStat = key =>
    sumBy(getLocations(stats), x => Number(x[key])).toLocaleString()

  return {
    Confirmados: aggregateStat('active'),
    Muertes: aggregateStat('deaths'),
    Recuperados: aggregateStat('recovered'),
    'Casos de hoy': aggregateStat('todayCases'),
    'Muertos hoy': aggregateStat('todayDeaths'),
    'Casos x millon': aggregateStat('critical'),
    'Casos criticos': aggregateStat('casesPerOneMillion')
  }
}

export const getMarkersCoords = ({ stats }) =>
  map(getLocations(stats), x => ({
    ...pick(x, ['active', 'countryInfo'])
  }))
