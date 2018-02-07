import axios from 'axios/index'

const api = process.env.REACT_APP_RECORDS_API_URL ||
  'http://5a7962b97fbfbb00126256ca.mockapi.io'

export const getALL = () => axios.get(`${api}/api/v1/records`)

export const create = (body) => axios.post(`${api}/api/v1/records`, body)

export const update = (id, body) => axios.put(`${api}/api/v1/records/${id}`,
  body)

export const remove = (id) => axios.delete(`${api}/api/v1/records/${id}`)