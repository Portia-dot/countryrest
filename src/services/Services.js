import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCountries() {
    return apiClient.get('/all')
  },
  getCountry(alpha2Code) {
    return apiClient.get('/alpha/' + alpha2Code)
  },
}
