import axios from 'axios'
import { getClientId } from '@/utils/cookie'

// create an axios instance
const service = axios.create({
  baseURL: '',
  timeout: 10000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (getClientId()) {
      config.headers.common['Client-Auth'] = getClientId()
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response.data.data
  },
  (error) => {
    return Promise.reject(error.message)
  }
)

export default service
