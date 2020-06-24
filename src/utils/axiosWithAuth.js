import axios from 'axios'
import { BASE_URL } from '../constants'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: token,
    },
  })
}