import Axios from 'axios'

export async function fetchCovid() {
  const { data } = await Axios.get('https://corona.lmao.ninja/jhucsse')
  return data
}
