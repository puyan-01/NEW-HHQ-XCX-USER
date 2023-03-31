import requestClass from './requestClass'
import { baseUrl } from '@/config'
import qs from 'qs'

const Request = new requestClass()

// 请求拦截器
Request.interceptors.request((request: any) => {
  console.log(`varName ====>`, '请求拦截')

  if (request.header.contentType) {
    request.header['content-type'] = request.header.contentType
    delete request.header.contentType
  }
  if (request.method === 'GET') {
    request.data = qs.stringify(request.data)
    request.url = request.url + '?' + request.data
  }

  return request
})

// 响应拦截器
Request.interceptors.response((response: any) => {
  console.log(`varName ====>`, '响应拦截')

  const token = uni.getStorageSync('token')

  console.log(`varName ====>`, token)

  // if (response.data.code === 403) {
  //   uni.showToast({
  //     title: token ? '请重新登录' : '请先登录',
  //     icon: 'none',
  //     duration: 2000,
  //   })
  //   uni.removeStorageSync('token')
  //   uni.removeStorageSync('userInfo')
  // }
  return response
})

// 设置默认配置
Request.setConfig((config: any) => {
  config.baseURL = baseUrl
  if (uni.getStorageSync('token')) {
    config.header['Authorization'] = 'Bearer ' + uni.getStorageSync('token')
  }

  return config
})

export default Request
