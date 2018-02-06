import axios from 'axios/index'

const api = process.env.REACT_APP_RECORDS_API_URL || 'http://5a7962b97fbfbb00126256ca.mockapi.io'

export const getALL = () => axios.get(`${api}/api/v1/records`)