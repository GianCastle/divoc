import Axios from 'axios'

export async function fetchCovid() {
  const { data } = await Axios.get('https://disease.sh/v3/covid-19/countries')
  return data
}
